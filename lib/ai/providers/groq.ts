import { AIProvider } from './types';
import axios from 'axios';

export class GroqProvider implements AIProvider {
    name = 'Groq';

    async processRequest(task: any): Promise<any> {
        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) throw new Error('GROQ_API_KEY missing');

        const res = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
            model: 'llama3-8b-8192',
            messages: [
                { role: 'system', content: 'You are ClawnBot.' },
                { role: 'user', content: `Execute task: ${task.name} with params: ${JSON.stringify(task.params)}` }
            ]
        }, {
            headers: { Authorization: `Bearer ${apiKey}` }
        });

        return res.data.choices[0].message.content;
    }
}
