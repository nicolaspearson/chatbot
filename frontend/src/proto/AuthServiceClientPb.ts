/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
	AuthorizeReply,
	AuthorizeRequest,
	ChangeUserPasswordReply,
	ChangeUserPasswordRequest,
	DeleteUserReply,
	DeleteUserRequest,
	EchoReply,
	EchoRequest,
	FindUserByIdReply,
	FindUserByIdRequest,
	LoginReply,
	LoginRequest,
	SaveUserReply,
	SaveUserRequest,
	SearchTerm,
	SearchUserReply,
	SearchUserRequest,
	UpdateUserReply,
	UpdateUserRequest,
	User } from './auth_pb';

export class AuthManagerClient {
	public client_: grpcWeb.AbstractClientBase;
	public hostname_: string;
	public credentials_: null | { [index: string]: string; };
	public options_: null | { [index: string]: string; };

	constructor (hostname: string,
								credentials: null | { [index: string]: string; },
								options: null | { [index: string]: string; }) {
		if (!options) { options = {}; }
		options.format = 'binary';

		this.client_ = new grpcWeb.GrpcWebClientBase(options);
		this.hostname_ = hostname;
		this.credentials_ = credentials;
		this.options_ = options;
	}

	public methodInfoEcho = new grpcWeb.AbstractClientBase.MethodInfo(
		EchoReply,
		(request: EchoRequest) => {
			return request.serializeBinary();
		},
		EchoReply.deserializeBinary
	);

	public echo(
		request: EchoRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: EchoReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/Echo',
			request,
			metadata,
			this.methodInfoEcho,
			callback);
	}

	public methodInfoAuthorize = new grpcWeb.AbstractClientBase.MethodInfo(
		AuthorizeReply,
		(request: AuthorizeRequest) => {
			return request.serializeBinary();
		},
		AuthorizeReply.deserializeBinary
	);

	public authorize(
		request: AuthorizeRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: AuthorizeReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/Authorize',
			request,
			metadata,
			this.methodInfoAuthorize,
			callback);
	}

	public methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
		LoginReply,
		(request: LoginRequest) => {
			return request.serializeBinary();
		},
		LoginReply.deserializeBinary
	);

	public login(
		request: LoginRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: LoginReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/Login',
			request,
			metadata,
			this.methodInfoLogin,
			callback);
	}

	public methodInfoFindUserById = new grpcWeb.AbstractClientBase.MethodInfo(
		FindUserByIdReply,
		(request: FindUserByIdRequest) => {
			return request.serializeBinary();
		},
		FindUserByIdReply.deserializeBinary
	);

	public findUserById(
		request: FindUserByIdRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: FindUserByIdReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/FindUserById',
			request,
			metadata,
			this.methodInfoFindUserById,
			callback);
	}

	public methodInfoSearchUser = new grpcWeb.AbstractClientBase.MethodInfo(
		SearchUserReply,
		(request: SearchUserRequest) => {
			return request.serializeBinary();
		},
		SearchUserReply.deserializeBinary
	);

	public searchUser(
		request: SearchUserRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: SearchUserReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/SearchUser',
			request,
			metadata,
			this.methodInfoSearchUser,
			callback);
	}

	public methodInfoSaveUser = new grpcWeb.AbstractClientBase.MethodInfo(
		SaveUserReply,
		(request: SaveUserRequest) => {
			return request.serializeBinary();
		},
		SaveUserReply.deserializeBinary
	);

	public saveUser(
		request: SaveUserRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: SaveUserReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/SaveUser',
			request,
			metadata,
			this.methodInfoSaveUser,
			callback);
	}

	public methodInfoChangeUserPassword = new grpcWeb.AbstractClientBase.MethodInfo(
		ChangeUserPasswordReply,
		(request: ChangeUserPasswordRequest) => {
			return request.serializeBinary();
		},
		ChangeUserPasswordReply.deserializeBinary
	);

	public changeUserPassword(
		request: ChangeUserPasswordRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: ChangeUserPasswordReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/ChangeUserPassword',
			request,
			metadata,
			this.methodInfoChangeUserPassword,
			callback);
	}

	public methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
		UpdateUserReply,
		(request: UpdateUserRequest) => {
			return request.serializeBinary();
		},
		UpdateUserReply.deserializeBinary
	);

	public updateUser(
		request: UpdateUserRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: UpdateUserReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/UpdateUser',
			request,
			metadata,
			this.methodInfoUpdateUser,
			callback);
	}

	public methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
		DeleteUserReply,
		(request: DeleteUserRequest) => {
			return request.serializeBinary();
		},
		DeleteUserReply.deserializeBinary
	);

	public deleteUser(
		request: DeleteUserRequest,
		metadata: grpcWeb.Metadata,
		callback: (err: grpcWeb.Error,
								response: DeleteUserReply) => void) {
		return this.client_.rpcCall(
			this.hostname_ +
				'/auth.AuthManager/DeleteUser',
			request,
			metadata,
			this.methodInfoDeleteUser,
			callback);
	}

}

