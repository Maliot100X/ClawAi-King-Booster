export async function runTask(task: { name: string; params: any }) {
    try {
        console.log(`Executing task "${task.name}" via /api/ai proxy...`);

        const res = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });

        if (!res.ok) {
            throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        return {
            status: 'completed',
            result: data,
            meta: `Processed via ${data.provider}`
        };
    } catch (err) {
        console.error('Task execution failed:', err);
        throw err;
    }
}
