import { GeminiProvider } from './providers/gemini';
import { GroqProvider } from './providers/groq';
import { MistralProvider } from './providers/mistral';
import { ApiFreeProvider } from './providers/apifree';
import { AimlApiProvider } from './providers/aimlapi';
import { LocalProvider } from './providers/local';

const providers = [
    new GeminiProvider(),
    new GroqProvider(),
    new MistralProvider(),
    new ApiFreeProvider(),
    new AimlApiProvider(),
    new LocalProvider() // Last resort
];

export async function executeAiTask(task: any) {
    let lastError = null;

    for (const provider of providers) {
        try {
            console.log(`[AI Router] Attempting provider: ${provider.name}`);
            const result = await provider.processRequest(task);
            return {
                provider: provider.name,
                data: result
            };
        } catch (err: any) {
            console.error(`[AI Router] Provider ${provider.name} failed:`, err.message);
            lastError = err;
            continue; // Try next
        }
    }

    throw new Error('All AI providers failed. Last error: ' + lastError?.message);
}
