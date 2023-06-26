import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import { Cart } from './Cart';

import styles from './index.module.scss';

export const Header: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href='/'>
                    <h1 className={styles.header}>Билетопоиск</h1>
                </Link>
                <Cart />
            </header>
        </div>
    );
};
