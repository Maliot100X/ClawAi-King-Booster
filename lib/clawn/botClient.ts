import axios from 'axios';

const BOT_KEYS = [
    process.env.CLAWN_BOT_API_KEY_1,
    process.env.CLAWN_BOT_API_KEY_2,
    process.env.CLAWN_BOT_API_KEY_3,
    process.env.CLAWN_BOT_API_KEY_4,
    process.env.CLAWN_BOT_API_KEY_5,
    process.env.CLAWN_BOT_API_KEY_6
].filter(Boolean);

let currentKeyIndex = 0;

export async function callClawnBot(payload: any) {
    for (let i = 0; i < BOT_KEYS.length; i++) {
        const key = BOT_KEYS[currentKeyIndex];
        try {
            // Assuming a hypothetical endpoint or using one of the provider URLs if keys are direct
            // The prompt says "https://api.clawnbot.com/task", so we stick to that for the implementation.
            const res = await axios.post('https://api.clawnbot.com/task', payload, {
                headers: { 'x-api-key': key as string }
            });
            return res.data;
        } catch (err: any) {
            console.warn(`API key #${currentKeyIndex + 1} failed: ${err.message}`);
            currentKeyIndex = (currentKeyIndex + 1) % BOT_KEYS.length;
            continue;
        }
    }
    throw new Error('All ClawnBot API keys failed');
}
