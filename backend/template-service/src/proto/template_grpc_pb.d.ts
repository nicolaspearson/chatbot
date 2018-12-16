// package: template
// file: template.proto

import * as grpc from 'grpc';
import * as template_pb from './template_pb';

interface ITemplateManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: ITemplateManagerService_IEcho;
}

interface ITemplateManagerService_IEcho {
  path: string; // "/template.TemplateManager/Echo"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<template_pb.EchoRequest>;
  requestDeserialize: grpc.deserialize<template_pb.EchoRequest>;
  responseSerialize: grpc.serialize<template_pb.EchoReply>;
  responseDeserialize: grpc.deserialize<template_pb.EchoReply>;
}

export const TemplateManagerService: ITemplateManagerService;
export interface ITemplateManagerServer {
  echo: grpc.handleUnaryCall<template_pb.EchoRequest, template_pb.EchoReply>;
}

export interface ITemplateManagerClient {
  echo(request: template_pb.EchoRequest, callback: (error: Error | null, response: template_pb.EchoReply) => void): grpc.ClientUnaryCall;
  echo(request: template_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: template_pb.EchoReply) => void): grpc.ClientUnaryCall;
}

export class TemplateManagerClient extends grpc.Client implements ITemplateManagerClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public echo(request: template_pb.EchoRequest, callback: (error: Error | null, response: template_pb.EchoReply) => void): grpc.ClientUnaryCall;
  public echo(request: template_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: template_pb.EchoReply) => void): grpc.ClientUnaryCall;
}

