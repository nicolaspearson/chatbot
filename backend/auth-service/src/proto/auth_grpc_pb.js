// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');

function serialize_auth_AuthorizeReply(arg) {
  if (!(arg instanceof auth_pb.AuthorizeReply)) {
    throw new Error('Expected argument of type auth.AuthorizeReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_AuthorizeReply(buffer_arg) {
  return auth_pb.AuthorizeReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_AuthorizeRequest(arg) {
  if (!(arg instanceof auth_pb.AuthorizeRequest)) {
    throw new Error('Expected argument of type auth.AuthorizeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_AuthorizeRequest(buffer_arg) {
  return auth_pb.AuthorizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ChangeUserPasswordReply(arg) {
  if (!(arg instanceof auth_pb.ChangeUserPasswordReply)) {
    throw new Error('Expected argument of type auth.ChangeUserPasswordReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_ChangeUserPasswordReply(buffer_arg) {
  return auth_pb.ChangeUserPasswordReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ChangeUserPasswordRequest(arg) {
  if (!(arg instanceof auth_pb.ChangeUserPasswordRequest)) {
    throw new Error('Expected argument of type auth.ChangeUserPasswordRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_ChangeUserPasswordRequest(buffer_arg) {
  return auth_pb.ChangeUserPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_DeleteUserReply(arg) {
  if (!(arg instanceof auth_pb.DeleteUserReply)) {
    throw new Error('Expected argument of type auth.DeleteUserReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_DeleteUserReply(buffer_arg) {
  return auth_pb.DeleteUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_DeleteUserRequest(arg) {
  if (!(arg instanceof auth_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type auth.DeleteUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_DeleteUserRequest(buffer_arg) {
  return auth_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_EchoReply(arg) {
  if (!(arg instanceof auth_pb.EchoReply)) {
    throw new Error('Expected argument of type auth.EchoReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_EchoReply(buffer_arg) {
  return auth_pb.EchoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_EchoRequest(arg) {
  if (!(arg instanceof auth_pb.EchoRequest)) {
    throw new Error('Expected argument of type auth.EchoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_EchoRequest(buffer_arg) {
  return auth_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_FindUserByIdReply(arg) {
  if (!(arg instanceof auth_pb.FindUserByIdReply)) {
    throw new Error('Expected argument of type auth.FindUserByIdReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_FindUserByIdReply(buffer_arg) {
  return auth_pb.FindUserByIdReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_FindUserByIdRequest(arg) {
  if (!(arg instanceof auth_pb.FindUserByIdRequest)) {
    throw new Error('Expected argument of type auth.FindUserByIdRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_FindUserByIdRequest(buffer_arg) {
  return auth_pb.FindUserByIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginReply(arg) {
  if (!(arg instanceof auth_pb.LoginReply)) {
    throw new Error('Expected argument of type auth.LoginReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_LoginReply(buffer_arg) {
  return auth_pb.LoginReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.LoginRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SaveUserReply(arg) {
  if (!(arg instanceof auth_pb.SaveUserReply)) {
    throw new Error('Expected argument of type auth.SaveUserReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_SaveUserReply(buffer_arg) {
  return auth_pb.SaveUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SaveUserRequest(arg) {
  if (!(arg instanceof auth_pb.SaveUserRequest)) {
    throw new Error('Expected argument of type auth.SaveUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_SaveUserRequest(buffer_arg) {
  return auth_pb.SaveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SearchUserReply(arg) {
  if (!(arg instanceof auth_pb.SearchUserReply)) {
    throw new Error('Expected argument of type auth.SearchUserReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_SearchUserReply(buffer_arg) {
  return auth_pb.SearchUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_SearchUserRequest(arg) {
  if (!(arg instanceof auth_pb.SearchUserRequest)) {
    throw new Error('Expected argument of type auth.SearchUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_SearchUserRequest(buffer_arg) {
  return auth_pb.SearchUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_UpdateUserReply(arg) {
  if (!(arg instanceof auth_pb.UpdateUserReply)) {
    throw new Error('Expected argument of type auth.UpdateUserReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_UpdateUserReply(buffer_arg) {
  return auth_pb.UpdateUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_UpdateUserRequest(arg) {
  if (!(arg instanceof auth_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type auth.UpdateUserRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_auth_UpdateUserRequest(buffer_arg) {
  return auth_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthManagerService = exports.AuthManagerService = {
  echo: {
    path: '/auth.AuthManager/Echo',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.EchoRequest,
    responseType: auth_pb.EchoReply,
    requestSerialize: serialize_auth_EchoRequest,
    requestDeserialize: deserialize_auth_EchoRequest,
    responseSerialize: serialize_auth_EchoReply,
    responseDeserialize: deserialize_auth_EchoReply,
  },
  authorize: {
    path: '/auth.AuthManager/Authorize',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AuthorizeRequest,
    responseType: auth_pb.AuthorizeReply,
    requestSerialize: serialize_auth_AuthorizeRequest,
    requestDeserialize: deserialize_auth_AuthorizeRequest,
    responseSerialize: serialize_auth_AuthorizeReply,
    responseDeserialize: deserialize_auth_AuthorizeReply,
  },
  login: {
    path: '/auth.AuthManager/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginReply,
    requestSerialize: serialize_auth_LoginRequest,
    requestDeserialize: deserialize_auth_LoginRequest,
    responseSerialize: serialize_auth_LoginReply,
    responseDeserialize: deserialize_auth_LoginReply,
  },
  findUserById: {
    path: '/auth.AuthManager/FindUserById',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.FindUserByIdRequest,
    responseType: auth_pb.FindUserByIdReply,
    requestSerialize: serialize_auth_FindUserByIdRequest,
    requestDeserialize: deserialize_auth_FindUserByIdRequest,
    responseSerialize: serialize_auth_FindUserByIdReply,
    responseDeserialize: deserialize_auth_FindUserByIdReply,
  },
  searchUser: {
    path: '/auth.AuthManager/SearchUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SearchUserRequest,
    responseType: auth_pb.SearchUserReply,
    requestSerialize: serialize_auth_SearchUserRequest,
    requestDeserialize: deserialize_auth_SearchUserRequest,
    responseSerialize: serialize_auth_SearchUserReply,
    responseDeserialize: deserialize_auth_SearchUserReply,
  },
  saveUser: {
    path: '/auth.AuthManager/SaveUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SaveUserRequest,
    responseType: auth_pb.SaveUserReply,
    requestSerialize: serialize_auth_SaveUserRequest,
    requestDeserialize: deserialize_auth_SaveUserRequest,
    responseSerialize: serialize_auth_SaveUserReply,
    responseDeserialize: deserialize_auth_SaveUserReply,
  },
  changeUserPassword: {
    path: '/auth.AuthManager/ChangeUserPassword',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ChangeUserPasswordRequest,
    responseType: auth_pb.ChangeUserPasswordReply,
    requestSerialize: serialize_auth_ChangeUserPasswordRequest,
    requestDeserialize: deserialize_auth_ChangeUserPasswordRequest,
    responseSerialize: serialize_auth_ChangeUserPasswordReply,
    responseDeserialize: deserialize_auth_ChangeUserPasswordReply,
  },
  updateUser: {
    path: '/auth.AuthManager/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.UpdateUserRequest,
    responseType: auth_pb.UpdateUserReply,
    requestSerialize: serialize_auth_UpdateUserRequest,
    requestDeserialize: deserialize_auth_UpdateUserRequest,
    responseSerialize: serialize_auth_UpdateUserReply,
    responseDeserialize: deserialize_auth_UpdateUserReply,
  },
  deleteUser: {
    path: '/auth.AuthManager/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DeleteUserRequest,
    responseType: auth_pb.DeleteUserReply,
    requestSerialize: serialize_auth_DeleteUserRequest,
    requestDeserialize: deserialize_auth_DeleteUserRequest,
    responseSerialize: serialize_auth_DeleteUserReply,
    responseDeserialize: deserialize_auth_DeleteUserReply,
  },
};

exports.AuthManagerClient = grpc.makeGenericClientConstructor(AuthManagerService);
