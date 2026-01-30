import { NextResponse } from 'next/server';
import { executeAiTask } from '@/lib/ai/router';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, params } = body;

        if (!name) {
            return NextResponse.json({ error: 'Task name required' }, { status: 400 });
        }

        const result = await executeAiTask({ name, params });
        return NextResponse.json(result);
    } catch (error: any) {
        console.error('AI Route Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
