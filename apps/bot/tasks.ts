import { getProvider, switchProvider } from './client';

export async function runTask(task: { name: string; params: any }) {
    try {
        const provider = getProvider();
        console.log(`Executing task "${task.name}" on provider:`, provider.name);
        // Replace with real API call logic per provider (OpenAI, Mistral, etc.)
        const result = {
            id: 'mock-task-id-' + Date.now(),
            status: 'completed',
            result: `Processed task: ${task.name} via ${provider.name}`,
            data: task,
        };
        return result;
    } catch (err) {
        console.error('Bot task error, switching provider...', err);
        switchProvider();
        throw err;
    }
}
