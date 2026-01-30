import { AIProvider } from './types';
import axios from 'axios';

export class GeminiProvider implements AIProvider {
    name = 'Gemini';

    async processRequest(task: any): Promise<any> {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) throw new Error('GEMINI_API_KEY missing');

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const payload = {
            contents: [{
                parts: [{ text: `Task: ${task.name}. Params: ${JSON.stringify(task.params)}` }]
            }]
        };

        const res = await axios.post(url, payload);
        return res.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini';
    }
}
