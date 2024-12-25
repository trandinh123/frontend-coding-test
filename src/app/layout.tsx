import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/styles/main.scss';

const dmSans = DM_Sans({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Weltenters Test',
    description: "Let's see what you can do!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={dmSans.className}>{children}</body>
        </html>
    );
}
