// package: auth
// file: auth.proto

import * as grpc from 'grpc';
import * as auth_pb from './auth_pb';

interface IAuthManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: IAuthManagerService_IEcho;
  authorize: IAuthManagerService_IAuthorize;
  login: IAuthManagerService_ILogin;
  findUserById: IAuthManagerService_IFindUserById;
  searchUser: IAuthManagerService_ISearchUser;
  saveUser: IAuthManagerService_ISaveUser;
  changeUserPassword: IAuthManagerService_IChangeUserPassword;
  updateUser: IAuthManagerService_IUpdateUser;
  deleteUser: IAuthManagerService_IDeleteUser;
}

interface IAuthManagerService_IEcho {
  path: string; // "/auth.AuthManager/Echo"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.EchoRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.EchoRequest>;
  responseSerialize: grpc.serialize<auth_pb.EchoReply>;
  responseDeserialize: grpc.deserialize<auth_pb.EchoReply>;
}

interface IAuthManagerService_IAuthorize {
  path: string; // "/auth.AuthManager/Authorize"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.AuthorizeRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.AuthorizeRequest>;
  responseSerialize: grpc.serialize<auth_pb.AuthorizeReply>;
  responseDeserialize: grpc.deserialize<auth_pb.AuthorizeReply>;
}

interface IAuthManagerService_ILogin {
  path: string; // "/auth.AuthManager/Login"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.LoginRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.LoginRequest>;
  responseSerialize: grpc.serialize<auth_pb.LoginReply>;
  responseDeserialize: grpc.deserialize<auth_pb.LoginReply>;
}

interface IAuthManagerService_IFindUserById {
  path: string; // "/auth.AuthManager/FindUserById"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.FindUserByIdRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.FindUserByIdRequest>;
  responseSerialize: grpc.serialize<auth_pb.FindUserByIdReply>;
  responseDeserialize: grpc.deserialize<auth_pb.FindUserByIdReply>;
}

interface IAuthManagerService_ISearchUser {
  path: string; // "/auth.AuthManager/SearchUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.SearchUserRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.SearchUserRequest>;
  responseSerialize: grpc.serialize<auth_pb.SearchUserReply>;
  responseDeserialize: grpc.deserialize<auth_pb.SearchUserReply>;
}

interface IAuthManagerService_ISaveUser {
  path: string; // "/auth.AuthManager/SaveUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.SaveUserRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.SaveUserRequest>;
  responseSerialize: grpc.serialize<auth_pb.SaveUserReply>;
  responseDeserialize: grpc.deserialize<auth_pb.SaveUserReply>;
}

interface IAuthManagerService_IChangeUserPassword {
  path: string; // "/auth.AuthManager/ChangeUserPassword"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.ChangeUserPasswordRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.ChangeUserPasswordRequest>;
  responseSerialize: grpc.serialize<auth_pb.ChangeUserPasswordReply>;
  responseDeserialize: grpc.deserialize<auth_pb.ChangeUserPasswordReply>;
}

interface IAuthManagerService_IUpdateUser {
  path: string; // "/auth.AuthManager/UpdateUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.UpdateUserRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.UpdateUserRequest>;
  responseSerialize: grpc.serialize<auth_pb.UpdateUserReply>;
  responseDeserialize: grpc.deserialize<auth_pb.UpdateUserReply>;
}

interface IAuthManagerService_IDeleteUser {
  path: string; // "/auth.AuthManager/DeleteUser"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<auth_pb.DeleteUserRequest>;
  requestDeserialize: grpc.deserialize<auth_pb.DeleteUserRequest>;
  responseSerialize: grpc.serialize<auth_pb.DeleteUserReply>;
  responseDeserialize: grpc.deserialize<auth_pb.DeleteUserReply>;
}

export const AuthManagerService: IAuthManagerService;
export interface IAuthManagerServer {
  echo: grpc.handleUnaryCall<auth_pb.EchoRequest, auth_pb.EchoReply>;
  authorize: grpc.handleUnaryCall<auth_pb.AuthorizeRequest, auth_pb.AuthorizeReply>;
  login: grpc.handleUnaryCall<auth_pb.LoginRequest, auth_pb.LoginReply>;
  findUserById: grpc.handleUnaryCall<auth_pb.FindUserByIdRequest, auth_pb.FindUserByIdReply>;
  searchUser: grpc.handleUnaryCall<auth_pb.SearchUserRequest, auth_pb.SearchUserReply>;
  saveUser: grpc.handleUnaryCall<auth_pb.SaveUserRequest, auth_pb.SaveUserReply>;
  changeUserPassword: grpc.handleUnaryCall<auth_pb.ChangeUserPasswordRequest, auth_pb.ChangeUserPasswordReply>;
  updateUser: grpc.handleUnaryCall<auth_pb.UpdateUserRequest, auth_pb.UpdateUserReply>;
  deleteUser: grpc.handleUnaryCall<auth_pb.DeleteUserRequest, auth_pb.DeleteUserReply>;
}

export interface IAuthManagerClient {
  echo(request: auth_pb.EchoRequest, callback: (error: Error | null, response: auth_pb.EchoReply) => void): grpc.ClientUnaryCall;
  echo(request: auth_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.EchoReply) => void): grpc.ClientUnaryCall;
  authorize(request: auth_pb.AuthorizeRequest, callback: (error: Error | null, response: auth_pb.AuthorizeReply) => void): grpc.ClientUnaryCall;
  authorize(request: auth_pb.AuthorizeRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.AuthorizeReply) => void): grpc.ClientUnaryCall;
  login(request: auth_pb.LoginRequest, callback: (error: Error | null, response: auth_pb.LoginReply) => void): grpc.ClientUnaryCall;
  login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.LoginReply) => void): grpc.ClientUnaryCall;
  findUserById(request: auth_pb.FindUserByIdRequest, callback: (error: Error | null, response: auth_pb.FindUserByIdReply) => void): grpc.ClientUnaryCall;
  findUserById(request: auth_pb.FindUserByIdRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.FindUserByIdReply) => void): grpc.ClientUnaryCall;
  searchUser(request: auth_pb.SearchUserRequest, callback: (error: Error | null, response: auth_pb.SearchUserReply) => void): grpc.ClientUnaryCall;
  searchUser(request: auth_pb.SearchUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.SearchUserReply) => void): grpc.ClientUnaryCall;
  saveUser(request: auth_pb.SaveUserRequest, callback: (error: Error | null, response: auth_pb.SaveUserReply) => void): grpc.ClientUnaryCall;
  saveUser(request: auth_pb.SaveUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.SaveUserReply) => void): grpc.ClientUnaryCall;
  changeUserPassword(request: auth_pb.ChangeUserPasswordRequest, callback: (error: Error | null, response: auth_pb.ChangeUserPasswordReply) => void): grpc.ClientUnaryCall;
  changeUserPassword(request: auth_pb.ChangeUserPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.ChangeUserPasswordReply) => void): grpc.ClientUnaryCall;
  updateUser(request: auth_pb.UpdateUserRequest, callback: (error: Error | null, response: auth_pb.UpdateUserReply) => void): grpc.ClientUnaryCall;
  updateUser(request: auth_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.UpdateUserReply) => void): grpc.ClientUnaryCall;
  deleteUser(request: auth_pb.DeleteUserRequest, callback: (error: Error | null, response: auth_pb.DeleteUserReply) => void): grpc.ClientUnaryCall;
  deleteUser(request: auth_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.DeleteUserReply) => void): grpc.ClientUnaryCall;
}

export class AuthManagerClient extends grpc.Client implements IAuthManagerClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public echo(request: auth_pb.EchoRequest, callback: (error: Error | null, response: auth_pb.EchoReply) => void): grpc.ClientUnaryCall;
  public echo(request: auth_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.EchoReply) => void): grpc.ClientUnaryCall;
  public authorize(request: auth_pb.AuthorizeRequest, callback: (error: Error | null, response: auth_pb.AuthorizeReply) => void): grpc.ClientUnaryCall;
  public authorize(request: auth_pb.AuthorizeRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.AuthorizeReply) => void): grpc.ClientUnaryCall;
  public login(request: auth_pb.LoginRequest, callback: (error: Error | null, response: auth_pb.LoginReply) => void): grpc.ClientUnaryCall;
  public login(request: auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.LoginReply) => void): grpc.ClientUnaryCall;
  public findUserById(request: auth_pb.FindUserByIdRequest, callback: (error: Error | null, response: auth_pb.FindUserByIdReply) => void): grpc.ClientUnaryCall;
  public findUserById(request: auth_pb.FindUserByIdRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.FindUserByIdReply) => void): grpc.ClientUnaryCall;
  public searchUser(request: auth_pb.SearchUserRequest, callback: (error: Error | null, response: auth_pb.SearchUserReply) => void): grpc.ClientUnaryCall;
  public searchUser(request: auth_pb.SearchUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.SearchUserReply) => void): grpc.ClientUnaryCall;
  public saveUser(request: auth_pb.SaveUserRequest, callback: (error: Error | null, response: auth_pb.SaveUserReply) => void): grpc.ClientUnaryCall;
  public saveUser(request: auth_pb.SaveUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.SaveUserReply) => void): grpc.ClientUnaryCall;
  public changeUserPassword(request: auth_pb.ChangeUserPasswordRequest, callback: (error: Error | null, response: auth_pb.ChangeUserPasswordReply) => void): grpc.ClientUnaryCall;
  public changeUserPassword(request: auth_pb.ChangeUserPasswordRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.ChangeUserPasswordReply) => void): grpc.ClientUnaryCall;
  public updateUser(request: auth_pb.UpdateUserRequest, callback: (error: Error | null, response: auth_pb.UpdateUserReply) => void): grpc.ClientUnaryCall;
  public updateUser(request: auth_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.UpdateUserReply) => void): grpc.ClientUnaryCall;
  public deleteUser(request: auth_pb.DeleteUserRequest, callback: (error: Error | null, response: auth_pb.DeleteUserReply) => void): grpc.ClientUnaryCall;
  public deleteUser(request: auth_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: auth_pb.DeleteUserReply) => void): grpc.ClientUnaryCall;
}

