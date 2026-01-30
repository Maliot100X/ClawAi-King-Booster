'use client';
import '../globals.css';
import BotPopup from '../components/BotPopup';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                {children}
                <BotPopup />
            </body>
        </html>
    );
}
