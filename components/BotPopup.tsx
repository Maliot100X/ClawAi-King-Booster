'use client';
import React, { useState } from 'react';
import { runTask } from '../lib/clawn/tasks';
export default function BotPopup() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const handleTest = async () => {
        try {
            const result = await runTask({ name: 'bot_test', params: { message: 'Hi from UI' } });
            console.log(result);
        } catch (e) {
            console.error("Popup task failed", e);
        }
    };
    return (
        <>
            <button onClick={toggle} className="fixed bottom-4 right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg hover:bg-red-600 transition-colors z-50">
                🤖
            </button>
            {open && (
                <div className="fixed bottom-24 right-4 bg-white p-4 rounded shadow-lg w-80 text-black border border-gray-200 z-50">
                    <h2 className="font-bold text-lg mb-2">Clawn AI Bot</h2>
                    <button onClick={handleTest} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
                        Run Test Task
                    </button>
                </div>
            )}
        </>
    );
}
