import { AIProvider } from './types';
import axios from 'axios';

export class MistralProvider implements AIProvider {
    name = 'Mistral';

    async processRequest(task: any): Promise<any> {
        const apiKey = process.env.MISTRAL_API_KEY;
        if (!apiKey) throw new Error('MISTRAL_API_KEY missing');

        // Using agent endpoint if available or standard chat
        const res = await axios.post('https://api.mistral.ai/v1/chat/completions', {
            model: 'mistral-large-latest',
            messages: [
                { role: 'user', content: `Task: ${task.name}. Data: ${JSON.stringify(task.params)}` }
            ]
        }, {
            headers: { Authorization: `Bearer ${apiKey}` }
        });

        return res.data.choices[0].message.content;
    }
}
