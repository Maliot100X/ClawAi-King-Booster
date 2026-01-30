// import dotenv from 'dotenv';
// dotenv.config();
// Next.js loads .env files automatically.


interface BotProvider {
    name: string;
    apiKey: string;
    clientId?: string;
    agentId?: string;
}

const providers: BotProvider[] = [
    { name: 'Gemini', apiKey: process.env.GEMINI_API_KEY! },
    { name: 'Apifree', apiKey: process.env.APIFREE_API_KEY! },
    { name: 'Aimlapi', apiKey: process.env.AIMLAPI_API_KEY! },
    { name: 'Groq', apiKey: process.env.GROQ_API_KEY!, clientId: process.env.GROQ_ORG_ID },
    { name: 'Mistral', apiKey: process.env.MISTRAL_API_KEY!, agentId: process.env.MISTRAL_AGENT_ID },
];

let currentProviderIndex = 0;

export function getProvider(): BotProvider {
    const provider = providers[currentProviderIndex];
    return provider;
}

export function switchProvider(): void {
    currentProviderIndex = (currentProviderIndex + 1) % providers.length;
}

console.log('Bot initialized with provider:', getProvider().name);
