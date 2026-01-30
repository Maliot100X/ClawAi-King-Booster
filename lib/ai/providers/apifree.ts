import { AIProvider } from './types';
import axios from 'axios';

export class ApiFreeProvider implements AIProvider {
    name = 'ApiFree';

    async processRequest(task: any): Promise<any> {
        const apiKey = process.env.APIFREE_API_KEY;
        if (!apiKey) throw new Error('APIFREE_API_KEY missing');

        const res = await axios.post('https://api.apifree.ai/v1/chat/completions', {
            model: 'gpt-4o-mini',
            messages: [
                { role: 'user', content: JSON.stringify(task) }
            ]
        }, {
            headers: { Authorization: `Bearer ${apiKey}` }
        });

        return res.data.choices[0].message.content;
    }
}
