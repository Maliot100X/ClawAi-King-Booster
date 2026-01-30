import { AIProvider } from './types';
import axios from 'axios';

export class AimlApiProvider implements AIProvider {
    name = 'AIMLAPI';

    async processRequest(task: any): Promise<any> {
        const apiKey = process.env.AIMLAPI_API_KEY;
        if (!apiKey) throw new Error('AIMLAPI_API_KEY missing');

        const res = await axios.post('https://api.aimlapi.com/chat/completions', {
            model: 'gpt-4o',
            messages: [
                { role: 'user', content: JSON.stringify(task) }
            ]
        }, {
            headers: { Authorization: `Bearer ${apiKey}` }
        });

        return res.data.choices[0].message.content;
    }
}
