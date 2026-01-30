export default class OpenClaw {
    constructor(public config: { apiKey?: string; clientId?: string }) {
        console.log('OpenClaw initialized with:', config);
    }

    async task(task: any) {
        console.log('Executing task:', task);
        return {
            id: 'mock-task-id-' + Date.now(),
            status: 'completed',
            result: `Processed task: ${task.name}`,
            data: task
        };
    }
}
