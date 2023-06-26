import React from 'react';
import './globals.scss';
import { Roboto } from 'next/font/google';
import classNames from 'classnames';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import styles from './layout.module.scss';
import { Metadata } from 'next';
import { StoreProvider } from '@/lib/redux/StoreProvider';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ru'>
            <body className={classNames(roboto.className, styles.container)}>
                <StoreProvider>
                    <Header />
                    <div className={styles.content}>
                        <div className={styles.childrenContainer}>
                            {children}
                        </div>
                        <Footer />
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
