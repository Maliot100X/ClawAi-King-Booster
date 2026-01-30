import { runTask } from './tasks';

async function runTest() {
    const result = await runTask({ name: 'test_task', params: { message: 'Hello Multi-API Bot' } });
    console.log('Test task result:', result);
}

runTest();
