'use client';
import React from 'react';
import { runTask } from '../../lib/clawn/tasks';

export default function Home() {
    async function testBoost() {
        try {
            const result = await runTask({ name: 'test_boost', params: { coin: 'ClawKing' } });
            console.log(result);
        } catch (e) {
            console.error("Task failed", e);
        }
    }
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">🔥 ClawKing Spotlight</h1>
            <button onClick={testBoost} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Run Test Boost
            </button>
        </div>
    );
}
