import { createDefaultMetadataKeyInterceptor, getSSLHubRpcClient } from '@farcaster/hub-nodejs';

const NE_RPC = process.env.NEYNAR_SNAPCHAIN_GRPC || 'snapchain-grpc-api.neynar.com:443';
const NE_API = process.env.NEYNAR_APP_API_KEY!;

export const snapchainClient = getSSLHubRpcClient(NE_RPC, {
    interceptors: [createDefaultMetadataKeyInterceptor('x-api-key', NE_API)],
    'grpc.max_receive_message_length': 20 * 1024 * 1024
});
