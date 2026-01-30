'use client';
import React from 'react';
export default function Shop() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Shop</h1>
            <ul className="mt-4 space-y-2">
                <li>Booster I - $1 - 10 min</li>
                <li>Booster II - $3 - 25 min</li>
                <li>Booster III - $6 - Global + notification</li>
                <li>Subscription Trial - $1</li>
                <li>Full Subscription - $15 / month</li>
            </ul>
        </div>
    );
}
