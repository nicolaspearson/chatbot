// package: auth
// file: auth.proto

import * as jspb from 'google-protobuf';

export class EchoRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message: string,
  }
}

export class EchoReply extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoReply.AsObject;
  static toObject(includeInstance: boolean, msg: EchoReply): EchoReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoReply;
  static deserializeBinaryFromReader(message: EchoReply, reader: jspb.BinaryReader): EchoReply;
}

export namespace EchoReply {
  export type AsObject = {
    message: string,
  }
}

export class AuthorizeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
  static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

export namespace AuthorizeRequest {
  export type AsObject = {
  }
}

export class AuthorizeReply extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeReply.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeReply): AuthorizeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeReply;
  static deserializeBinaryFromReader(message: AuthorizeReply, reader: jspb.BinaryReader): AuthorizeReply;
}

export namespace AuthorizeReply {
  export type AsObject = {
    isValid: boolean,
    user?: User.AsObject,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
    emailAddress: string,
  }
}

export class LoginReply extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    token: string,
    user?: User.AsObject,
  }
}

export class FindUserByIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserByIdRequest): FindUserByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUserByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserByIdRequest;
  static deserializeBinaryFromReader(message: FindUserByIdRequest, reader: jspb.BinaryReader): FindUserByIdRequest;
}

export namespace FindUserByIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class FindUserByIdReply extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserByIdReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserByIdReply): FindUserByIdReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindUserByIdReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserByIdReply;
  static deserializeBinaryFromReader(message: FindUserByIdReply, reader: jspb.BinaryReader): FindUserByIdReply;
}

export namespace FindUserByIdReply {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class SearchUserRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  clearTermsList(): void;
  getTermsList(): Array<SearchTerm>;
  setTermsList(value: Array<SearchTerm>): void;
  addTerms(value?: SearchTerm, index?: number): SearchTerm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUserRequest): SearchUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUserRequest;
  static deserializeBinaryFromReader(message: SearchUserRequest, reader: jspb.BinaryReader): SearchUserRequest;
}

export namespace SearchUserRequest {
  export type AsObject = {
    limit: number,
    termsList: Array<SearchTerm.AsObject>,
  }
}

export class SearchUserReply extends jspb.Message {
  clearUserList(): void;
  getUserList(): Array<User>;
  setUserList(value: Array<User>): void;
  addUser(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUserReply): SearchUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUserReply;
  static deserializeBinaryFromReader(message: SearchUserReply, reader: jspb.BinaryReader): SearchUserReply;
}

export namespace SearchUserReply {
  export type AsObject = {
    userList: Array<User.AsObject>,
  }
}

export class SearchTerm extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTerm.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTerm): SearchTerm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTerm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTerm;
  static deserializeBinaryFromReader(message: SearchTerm, reader: jspb.BinaryReader): SearchTerm;
}

export namespace SearchTerm {
  export type AsObject = {
    field: string,
    value: string,
    operator: string,
  }
}

export class SaveUserRequest extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveUserRequest): SaveUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveUserRequest;
  static deserializeBinaryFromReader(message: SaveUserRequest, reader: jspb.BinaryReader): SaveUserRequest;
}

export namespace SaveUserRequest {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class SaveUserReply extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: SaveUserReply): SaveUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SaveUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveUserReply;
  static deserializeBinaryFromReader(message: SaveUserReply, reader: jspb.BinaryReader): SaveUserReply;
}

export namespace SaveUserReply {
  export type AsObject = {
    token: string,
    user?: User.AsObject,
  }
}

export class ChangeUserPasswordRequest extends jspb.Message {
  getNewPassword(): string;
  setNewPassword(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeUserPasswordRequest): ChangeUserPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeUserPasswordRequest;
  static deserializeBinaryFromReader(message: ChangeUserPasswordRequest, reader: jspb.BinaryReader): ChangeUserPasswordRequest;
}

export namespace ChangeUserPasswordRequest {
  export type AsObject = {
    newPassword: string,
    user?: User.AsObject,
  }
}

export class ChangeUserPasswordReply extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeUserPasswordReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeUserPasswordReply): ChangeUserPasswordReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeUserPasswordReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeUserPasswordReply;
  static deserializeBinaryFromReader(message: ChangeUserPasswordReply, reader: jspb.BinaryReader): ChangeUserPasswordReply;
}

export namespace ChangeUserPasswordReply {
  export type AsObject = {
    token: string,
    user?: User.AsObject,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    id: number,
    user?: User.AsObject,
  }
}

export class UpdateUserReply extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserReply): UpdateUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserReply;
  static deserializeBinaryFromReader(message: UpdateUserReply, reader: jspb.BinaryReader): UpdateUserReply;
}

export namespace UpdateUserReply {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    id: number,
    user?: User.AsObject,
  }
}

export class DeleteUserReply extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserReply): DeleteUserReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserReply;
  static deserializeBinaryFromReader(message: DeleteUserReply, reader: jspb.BinaryReader): DeleteUserReply;
}

export namespace DeleteUserReply {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getLastLoggedInAt(): string;
  setLastLoggedInAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    emailAddress: string,
    enabled: boolean,
    lastLoggedInAt: string,
  }
}

