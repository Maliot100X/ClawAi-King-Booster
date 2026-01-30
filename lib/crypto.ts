import { JsonRpcProvider } from '@ethersproject/providers';

export const baseProvider = new JsonRpcProvider({
    url: process.env.BASE_RPC!,
    user: process.env.BASE_RPC_USER,
    password: process.env.BASE_RPC_PASS
});

export const zoraProvider = new JsonRpcProvider({
    url: process.env.ZORA_RPC!,
    user: process.env.ZORA_RPC_USER,
    password: process.env.ZORA_RPC_PASS
});
