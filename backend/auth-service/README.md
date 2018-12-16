# Auth Service

The Auth Service is responsible for authorizing users and validating JWT tokens.

### Overview

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

### Configuration

The configuration of static application variables is done using [nconf](https://github.com/indexzero/nconf). It allows us to set the hierarchy for different sources of configuration with no defaults. Thus providing an easy way to configure the applications for the various environments, i.e. `development`, `staging`, and `production`.

The configuration hierarchy being used:

1.  argv - Command line arguments will override environment variables, and configuration files.
2.  env - Environment variables will override configuration files.
3.  file - Files will be used as the baseline configuration if neither of the above is specified.

### Directory Structure

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
│   └── ...
└── utils
    ├── auth.utils.ts
    ├── grpc.utils.ts
    ├── proto.utils.ts
    └── system.utils.ts
```

### gRPC & Protocol Buffers

This project uses gRPC and Protocol Buffers.

**Protoc Binary**

Download and install the compiler: https://github.com/protocolbuffers/protobuf/releases

```
$ mv ~/Downloads/protoc-3.6.1-osx-x86_64 ~/Tools
$ ln -s protoc-3.6.1-osx-x86_64 protoc
```

Add the binary to your path, e.g. `export PATH=$PATH:$HOME/Tools/protoc/bin`

**Protoc Gen Plugin**

Install the plugin: `npm install protoc-gen-grpc -g`

Run the following command to generate the proto messages and the service client stub from .proto definitions:

```bash
$ auth-service/proto-gen.sh
```

### gRPC Testing

Install grpcc: `npm install -g grpcc`

Connect to the gRPC server:

```bash
$ grpcc --proto ./auth-service/src/proto/auth.proto --address 127.0.0.1:8080 -i
```

Test the connection using an **Echo:**

```bash
$ client.echo({ "message": "Hi there!" }, printReply)
```

**Login:**

```bash
$ client.login({ "username": "guest", "password": "ulan" }, createMetadata({ "x-access-token": "secret"}), printReply)
```
