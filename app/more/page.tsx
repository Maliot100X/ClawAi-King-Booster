'use client';
import React from 'react';
export default function More() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">More</h1>
            <div className="space-y-2 mt-4">
                <button className="p-2 bg-gray-200 rounded">Holdings</button>
                <button className="p-2 bg-gray-200 rounded">About</button>
                <button className="p-2 bg-gray-200 rounded">GitHub</button>
            </div>
        </div>
    );
}
