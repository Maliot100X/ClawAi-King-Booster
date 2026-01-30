'use client';
import React from 'react';
export default function ClawWarTokens() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">ClawWarTokens</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <button className="p-2 bg-gray-200 rounded">Base Coins</button>
                <button className="p-2 bg-gray-200 rounded">Zora Coins</button>
                <button className="p-2 bg-gray-200 rounded">Trending</button>
            </div>
        </div>
    );
}
