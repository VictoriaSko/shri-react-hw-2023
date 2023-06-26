import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import styles from './index.module.scss';

export const Footer: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <Link href='/questions' className={styles.questions}>
                    Вопросы-ответы
                </Link>
                <Link href='/about' className={styles.about}>
                    О нас
                </Link>
            </footer>
        </div>
    );
};
