import { MetadataValue, sendUnaryData, ServerUnaryCall } from 'grpc';
import GrpcBoom from 'grpc-boom';

export function handleError(callback: sendUnaryData<any>, error: any) {
	if (error && error.isBoom) {
		callback(error, null);
		return;
	}
	const grpcBoom: GrpcBoom = GrpcBoom.internal('An unknown error occurred');
	callback(grpcBoom, null);
}

export function getMetadataValue(
	call: ServerUnaryCall<any>,
	name: string
): MetadataValue | undefined {
	if (call && call.metadata) {
		const metadata = call.metadata.getMap();
		return metadata[name];
	}
	return undefined;
}
