import { AIProvider } from './types';

export class LocalProvider implements AIProvider {
    name = 'LocalMock';

    async processRequest(task: any): Promise<any> {
        return {
            message: 'Local Fallback Response',
            originalTask: task,
            timestamp: new Date().toISOString()
        };
    }
}
