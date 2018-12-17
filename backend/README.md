# Chatbot Backend

This project contains various microservices, that together comprise the backend system.

## Getting started

- Download and install [VS Code](https://code.visualstudio.com/).
- Clone the repository
- Install Docker
- Running the system:
  - Execute `docker-compose up` from the project root directory.
- Stopping the system:
  - Execute `docker-compose stop` from the project root directory.
- Destroying the system:
  - Execute `docker-compose down` from the project root directory.
  - This will remove the containers that were created

## Development

To add a new microservice:

1. Use the [Template Service](#template-service) as a starting point.
2. Copy and paste the folder, and rename all of the `template` references.
3. Bring the system up by executing `docker-compose up --build`
4. You should now be able to use `npm start` from your microservices' directory.
5. Once you are done with development:
   1. Add an entry for the new microservice to the `docker-compose.yml` file.
   2. Add a route for your service to the `../envoy/backend/envoy.yaml` file.

## Project structure

The project is divided into various microservices. A microservice in this architecture is simply a service which is responsible for a single broadly-defined task, e.g. the `auth-service` performs the task of creating, and validating JWT tokens against registered users in a database.

## Infrastructure

- **Chatbot DB** - This database is used by all of the microservices that need to access a central database. Each microservice must use it's own database schema.

### Chatbot DB

This is a PostgreSQL database that used by all of the microservices that require access to a central database. Each microservice that needs to access this database should do so via a specific schema, e.g. the `auth-service` uses the `auth` schema

Directory structure:

```
chatbot-db
├── db-data
├── db-scripts
│   ├── create.sql
│   └── seed.sql
└── docker-compose.yml
```

## Microservices

- **Auth Service** - The Auth Service is responsible for authorizing users and validating JWT tokens.
- **Template Service** - Use this as a quick start for creating a new microservice.

### Auth Service (Node)

The Auth Service is responsible for authorizing users and validating JWT tokens.

**Overview:**

- **actions** - API actions.
- **db** - Database configuration and invocation.
- **env** - Configuration of static application variables. See **Configuration** below for more information.
- **index.ts** - Application entrypoint.
- **logger** - Application logging.
- **models** - Application and database models
- **proto** - Protocol buffer files, contains both source files, i.e. `*.proto`, as well as the generated output. See [gRPC & Protocol Buffers](#grpc-&-protocol-buffers)
- **repositories** - Database repositories
- **services** - Database related services
- **types** - Additional typescript definitions.
- **utils** - Application utilities

**Configuration:**

The configuration of static application variables is done using [nconf](https://github.com/indexzero/nconf). It allows us to set the hierarchy for different sources of configuration with no defaults. Thus providing an easy way to configure the applications for the various environments, i.e. `development`, `staging`, and `production`.

The configuration hierarchy being used:

1.  argv - Command line arguments will override environment variables, and configuration files.
2.  env - Environment variables will override configuration files.
3.  file - Files will be used as the baseline configuration if neither of the above is specified.

**Directory Structure:**

```
src
├── actions
│   ├── auth.actions.ts
│   ├── echo.actions.ts
│   └── index.ts
├── db
│   └── app.db.ts
├── env
│   ├── config.default.json
│   ├── config.development.json
│   ├── config.production.json
│   ├── config.staging.json
│   └── index.ts
├── index.ts
├── logger
│   └── app.logger.ts
├── models
│   ├── interfaces
│   │   └── TokenUser.ts
│   ├── internal
│   │   └── token.internal.ts
│   ├── role.model.ts
│   └── user.model.ts
├── proto
│   ├── auth.proto
│   ├── auth_grpc_pb.d.ts
│   ├── auth_grpc_pb.js
│   ├── auth_pb.d.ts
│   └── auth_pb.js
├── repositories
│   └── user.repository.ts
├── services
│   └── user.service.ts
├── types
│   └──  ...
└── utils
    ├── auth.utils.ts
    ├── grpc.utils.ts
    ├── proto.utils.ts
    └── system.utils.ts
```

### Template Service (Node)

This is a template for creating new services. Simply copy and paste the root directory, rename the folder, and customise as required.

**Overview:**

- **actions** - API actions.
- **db** - Database configuration and invocation.
- **env** - Configuration of static application variables. See **Configuration** below for more information.
- **index.ts** - Application entrypoint.
- **logger** - Application logging.
- **models** - Application and database models
- **proto** - Protocol buffer files, contains both source files, i.e. `*.proto`, as well as the generated output. See [gRPC & Protocol Buffers](#grpc-&-protocol-buffers)
- **types** - Additional typescript definitions.
- **utils** - Application utilities

**Configuration:**

The configuration of static application variables is done using [nconf](https://github.com/indexzero/nconf). It allows us to set the hierarchy for different sources of configuration with no defaults. Thus providing an easy way to configure the applications for the various environments, i.e. `development`, `staging`, and `production`.

The configuration hierarchy being used:

1.  argv - Command line arguments will override environment variables, and configuration files.
2.  env - Environment variables will override configuration files.
3.  file - Files will be used as the baseline configuration if neither of the above is specified.

**Directory Structure:**

```
src
├── actions
│   ├── echo.actions.ts
│   └── index.ts
├── db
│   └── app.db.ts
├── env
│   ├── config.default.json
│   ├── config.development.json
│   ├── config.production.json
│   ├── config.staging.json
│   └── index.ts
├── index.ts
├── logger
│   └── app.logger.ts
├── models
├── proto
│   ├── template.proto
│   ├── template_grpc_pb.d.ts
│   ├── template_grpc_pb.js
│   ├── template_pb.d.ts
│   └── template_pb.js
├── types
│   └──  ...
└── utils
    ├── grpc.utils.ts
    └── system.utils.ts
```

## gRPC & Protocol Buffers

This project uses gRPC and Protocol Buffers.

**Protoc Binary**

Download and install the compiler: https://github.com/protocolbuffers/protobuf/releases

```
$ mv ~/Downloads/protoc-3.6.1-osx-x86_64 ~/Tools
$ ln -s protoc-3.6.1-osx-x86_64 protoc
```

Add the binary to your path, e.g. `export PATH=$PATH:$HOME/Tools/protoc/bin`

**Protoc Gen Plugin**

If you are using Nodejs to create your microservice:

Install the plugin: `npm install protoc-gen-grpc -g`

Run the following command to generate the proto messages and the service client stub from .proto definitions:

```bash
$ auth-service/proto-gen.sh
```

_See the README of each microservice for testing details_
