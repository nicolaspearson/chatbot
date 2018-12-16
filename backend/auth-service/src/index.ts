import 'module-alias/register';
import 'reflect-metadata';

import * as grpc from 'grpc';
import {
	GrpcHealthCheck,
	HealthCheckRequest,
	HealthCheckResponse,
	HealthClient,
	HealthService
} from 'grpc-ts-health-check';

import { AuthActions, EchoActions } from '@actions';
import { Database } from '@db/app.db';
import * as config from '@env';
import AppLogger from '@logger/app.logger';
import { AuthManagerService } from '@proto/auth_grpc_pb';
import UserRepository from '@repositories/user.repository';
import UserService from '@services/user.service';
import { SystemUtils } from '@utils/system.utils';

const serviceName = 'auth.AuthManager';
const healthCheckStatusMap = {
	serviceName: HealthCheckResponse.ServingStatus.UNKNOWN
};

// Setup environment config
config.init();

async function init() {
	// Setup the logger
	const appLogger = new AppLogger();
	appLogger.setupAppLogger();

	if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
		AppLogger.logger.debug('Waiting 30 seconds for database...');
		await SystemUtils.sleep(30000);
	} else {
		AppLogger.logger.debug(`Auth service config: ${JSON.stringify(config.getServerConfig())}`);
	}

	// Connect to the database
	const database: Database = new Database();
	try {
		await database.setupDatabase();
	} catch (error) {
		AppLogger.logger.error(`Database connection failed: ${JSON.stringify(error)}`);
		throw error;
	}
}

function getGrpcLogLevel(): grpc.logVerbosity {
	const logLevel: string = config.getServerConfig().GRPC_LOG_LEVEL;
	if (logLevel === 'DEBUG') {
		return grpc.logVerbosity.DEBUG;
	} else if (logLevel === 'INFO') {
		return grpc.logVerbosity.INFO;
	}
	return grpc.logVerbosity.ERROR;
}

async function start(): Promise<grpc.Server> {
	try {
		await init();

		// Create the repository and service
		const userRepository = new UserRepository();
		const userService = new UserService(userRepository);

		// Create the server
		const server: grpc.Server = new grpc.Server();

		// Register service actions
		const authActions = new AuthActions(userService);
		const echoActions = new EchoActions();

		// Set the server log level
		grpc.setLogVerbosity(getGrpcLogLevel());

		server.addService(AuthManagerService, {
			...authActions.getActionMap(),
			...echoActions.getActionMap()
		});

		// Register the health service
		const grpcHealthCheck = new GrpcHealthCheck(healthCheckStatusMap);
		grpcHealthCheck.setStatus(serviceName, HealthCheckResponse.ServingStatus.SERVING);
		server.addService(HealthService, grpcHealthCheck);

		// Bind the server
		const host: string = config.getServerConfig().GRPC_HOST;
		const port: string = config.getServerConfig().GRPC_PORT;
		server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());

		// Start the server
		server.start();

		// Check the health status
		const healthClient = new HealthClient(`${host}:${port}`, grpc.credentials.createInsecure());
		const request = new HealthCheckRequest();
		request.setService(serviceName);
		healthClient.check(request, (error: Error | null, response: HealthCheckResponse) => {
			if (error) {
				AppLogger.logger.error('Auth Service: Health Check Failed', error);
			} else {
				AppLogger.logger.debug(`Auth Service: Health Check Status: ${response.getStatus()}`);
			}
		});

		AppLogger.logger.debug(`Auth Service: Listening: ${host}:${port}`);

		return server;
	} catch (error) {
		process.exit(1);
		throw error;
	}
}

start();
