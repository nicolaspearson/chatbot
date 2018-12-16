// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var template_pb = require('./template_pb.js');

function serialize_template_EchoReply(arg) {
  if (!(arg instanceof template_pb.EchoReply)) {
    throw new Error('Expected argument of type template.EchoReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_template_EchoReply(buffer_arg) {
  return template_pb.EchoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_EchoRequest(arg) {
  if (!(arg instanceof template_pb.EchoRequest)) {
    throw new Error('Expected argument of type template.EchoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_template_EchoRequest(buffer_arg) {
  return template_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TemplateManagerService = exports.TemplateManagerService = {
  echo: {
    path: '/template.TemplateManager/Echo',
    requestStream: false,
    responseStream: false,
    requestType: template_pb.EchoRequest,
    responseType: template_pb.EchoReply,
    requestSerialize: serialize_template_EchoRequest,
    requestDeserialize: deserialize_template_EchoRequest,
    responseSerialize: serialize_template_EchoReply,
    responseDeserialize: deserialize_template_EchoReply,
  },
};

exports.TemplateManagerClient = grpc.makeGenericClientConstructor(TemplateManagerService);
