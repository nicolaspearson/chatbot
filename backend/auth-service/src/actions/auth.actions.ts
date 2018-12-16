import { MetadataValue, sendUnaryData, ServerUnaryCall } from 'grpc';
import GrpcBoom from 'grpc-boom';
import { SearchTerm } from 'grpc-typeorm-infrastructure';

import { getServerConfig } from '@env';
import AppLogger from '@logger/app.logger';
import { TokenUser } from '@models/interfaces/TokenUser';
import Token from '@models/internal/token.internal';
import { User } from '@models/user.model';
import {
	AuthorizeReply,
	AuthorizeRequest,
	ChangeUserPasswordReply,
	ChangeUserPasswordRequest,
	DeleteUserReply,
	DeleteUserRequest,
	FindUserByIdReply,
	FindUserByIdRequest,
	LoginReply,
	LoginRequest,
	SaveUserReply,
	SaveUserRequest,
	SearchUserReply,
	SearchUserRequest,
	UpdateUserReply,
	UpdateUserRequest,
	User as UserProto
} from '@proto/auth_pb';
import UserService from '@services/user.service';
import { AuthUtils } from '@utils/auth.utils';
import * as GrpcUtils from '@utils/grpc.utils';
import * as ProtoUtils from '@utils/proto.utils';

export class AuthActions {
	public static instance: AuthActions;

	constructor(public userService: UserService) {
		AuthActions.instance = this;
	}

	public getActionMap() {
		return {
			authorize: this.doAuthorize,
			login: this.doLogin,
			findUserById: this.doFindUserById,
			searchUser: this.doSearchUser,
			saveUser: this.doSaveUser,
			changeUserPassword: this.doChangeUserPassword,
			updateUser: this.doUpdateUser,
			deleteUser: this.doDeleteUser
		};
	}

	public async doAuthorize(
		call: ServerUnaryCall<AuthorizeRequest>,
		callback: sendUnaryData<AuthorizeReply>
	) {
		try {
			callback(null, await AuthActions.instance.authorize(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async authorize(call: ServerUnaryCall<AuthorizeRequest>): Promise<AuthorizeReply> {
		const authorization: MetadataValue | undefined = GrpcUtils.getMetadataValue(
			call,
			'authorization'
		);
		const reply: AuthorizeReply = new AuthorizeReply();
		if (!authorization) {
			reply.setIsValid(false);
			return reply;
		}
		try {
			const authToken = AuthUtils.verifyAuthHeader(authorization.toString());
			if (authToken) {
				const token: Token = new Token(authToken);
				if (token) {
					try {
						token.verifyToken();
					} catch (error) {
						// Token Expired
						reply.setIsValid(false);
						return reply;
					}

					const result: User = await AuthActions.instance.userService.authorize(token);
					if (result && result.id && result.enabled) {
						reply.setIsValid(true);
						reply.setUser(ProtoUtils.userTransformToProto(result));
						return reply;
					}
				}
			}
		} catch (error) {
			AppLogger.logger.error(`Authorization failed: ${JSON.stringify(error)}`);
		}
		reply.setIsValid(false);
		return reply;
	}

	public async doLogin(call: ServerUnaryCall<LoginRequest>, callback: sendUnaryData<LoginReply>) {
		try {
			callback(null, await AuthActions.instance.login(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async login(call: ServerUnaryCall<LoginRequest>): Promise<LoginReply> {
		const request: LoginRequest = call.request;
		const accessToken: MetadataValue | undefined = GrpcUtils.getMetadataValue(
			call,
			'x-access-token'
		);
		if (!accessToken || accessToken.toString() !== getServerConfig().ACCESS_TOKEN) {
			throw GrpcBoom.unauthenticated('Invalid API token');
		}

		let username: string | undefined;
		let password: string | undefined;
		let emailAddress: string | undefined;

		if (request.getUsername()) {
			username = request.getUsername();
		}
		if (request.getPassword()) {
			password = request.getPassword();
		}
		if (request.getEmailAddress()) {
			emailAddress = request.getEmailAddress();
		}
		if (password && (username || emailAddress)) {
			const result: TokenUser = await AuthActions.instance.userService.login(
				password,
				username,
				emailAddress
			);
			const reply: LoginReply = new LoginReply();
			reply.setToken(result.token);
			reply.setUser(ProtoUtils.userTransformToProto(result.user));
			return reply;
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doFindUserById(
		call: ServerUnaryCall<FindUserByIdRequest>,
		callback: sendUnaryData<FindUserByIdReply>
	) {
		try {
			callback(null, await AuthActions.instance.findUserById(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async findUserById(
		call: ServerUnaryCall<FindUserByIdRequest>
	): Promise<FindUserByIdReply> {
		const request: FindUserByIdRequest = call.request;
		if (request.getId() && request.getId() > 0) {
			const result: User = await AuthActions.instance.userService.findOneById(request.getId());
			const reply: FindUserByIdReply = new FindUserByIdReply();
			reply.setUser(ProtoUtils.userTransformToProto(result));
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doSearchUser(
		call: ServerUnaryCall<SearchUserRequest>,
		callback: sendUnaryData<SearchUserReply>
	) {
		try {
			callback(null, await AuthActions.instance.searchUser(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async searchUser(call: ServerUnaryCall<SearchUserRequest>): Promise<SearchUserReply> {
		const request: SearchUserRequest = call.request;
		if (request.getLimit() && request.getTermsList()) {
			const searchTerms: SearchTerm[] = [];
			for (const searchTermRequest of request.getTermsList()) {
				const searchTerm: SearchTerm = SearchTerm.newSearchTerm(searchTermRequest.toObject());
				searchTerms.push(searchTerm);
			}
			const result: User[] = await AuthActions.instance.userService.search(
				request.getLimit(),
				searchTerms
			);

			const reply: SearchUserReply = new SearchUserReply();
			const userList: UserProto[] = [];
			for (const user of result) {
				const userProto: UserProto = ProtoUtils.userTransformToProto(user);
				userList.push(userProto);
			}
			reply.setUserList(userList);
			return reply;
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doSaveUser(
		call: ServerUnaryCall<SaveUserRequest>,
		callback: sendUnaryData<SaveUserReply>
	) {
		try {
			callback(null, await AuthActions.instance.saveUser(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	// Uses X-ACCESS-TOKEN to validate access, and returns a JWT token
	public async saveUser(call: ServerUnaryCall<SaveUserRequest>): Promise<SaveUserReply> {
		const request: SaveUserRequest = call.request;
		const accessToken: MetadataValue | undefined = GrpcUtils.getMetadataValue(
			call,
			'x-access-token'
		);
		if (!accessToken || accessToken.toString() !== getServerConfig().ACCESS_TOKEN) {
			throw GrpcBoom.unauthenticated('Invalid API token');
		}

		const userProto: UserProto | undefined = request.getUser();
		if (userProto) {
			const user: User = ProtoUtils.userTransformFromProto(userProto);
			if (user) {
				const result: TokenUser = await AuthActions.instance.userService.signUp(user);
				const reply: SaveUserReply = new SaveUserReply();
				reply.setToken(result.token);
				reply.setUser(ProtoUtils.userTransformToProto(result.user));
				return reply;
			}
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doChangeUserPassword(
		call: ServerUnaryCall<ChangeUserPasswordRequest>,
		callback: sendUnaryData<ChangeUserPasswordReply>
	) {
		try {
			callback(null, await AuthActions.instance.changeUserPassword(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async changeUserPassword(
		call: ServerUnaryCall<ChangeUserPasswordRequest>
	): Promise<ChangeUserPasswordReply> {
		const request: ChangeUserPasswordRequest = call.request;
		const userProto: UserProto | undefined = request.getUser();
		if (userProto && request.getNewPassword()) {
			const user: User = ProtoUtils.userTransformFromProto(userProto);
			if (user) {
				const result: TokenUser = await AuthActions.instance.userService.changePassword(
					user,
					request.getNewPassword()
				);
				const reply: ChangeUserPasswordReply = new ChangeUserPasswordReply();
				reply.setToken(result.token);
				reply.setUser(ProtoUtils.userTransformToProto(result.user));
				return reply;
			}
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doUpdateUser(
		call: ServerUnaryCall<UpdateUserRequest>,
		callback: sendUnaryData<UpdateUserReply>
	) {
		try {
			callback(null, await AuthActions.instance.updateUser(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async updateUser(call: ServerUnaryCall<UpdateUserRequest>): Promise<UpdateUserReply> {
		const request: UpdateUserRequest = call.request;
		const userProto: UserProto | undefined = request.getUser();
		if (userProto && request.getId()) {
			const user: User = ProtoUtils.userTransformFromProto(userProto);
			if (user) {
				if (String(request.getId()) !== String(user.id)) {
					throw GrpcBoom.invalidArgument(
						'An id mismatch error occurred. The id supplied as a url parameter does not match the supplied user'
					);
				}
				const result: User = await AuthActions.instance.userService.update(user);
				const reply: UpdateUserReply = new UpdateUserReply();
				reply.setUser(ProtoUtils.userTransformToProto(result));
				return reply;
			}
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doDeleteUser(
		call: ServerUnaryCall<DeleteUserRequest>,
		callback: sendUnaryData<DeleteUserReply>
	) {
		try {
			callback(null, await AuthActions.instance.deleteUser(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async deleteUser(call: ServerUnaryCall<DeleteUserRequest>): Promise<DeleteUserReply> {
		const request: DeleteUserRequest = call.request;
		if (request.getId() && request.getId() > 0) {
			const result: User = await AuthActions.instance.userService.delete(request.getId());
			const reply: DeleteUserReply = new DeleteUserReply();
			reply.setUser(ProtoUtils.userTransformToProto(result));
			return reply;
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}
}
