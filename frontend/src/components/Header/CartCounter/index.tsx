'use client';

import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { ReduxStore } from '@/types/reduxStore';

import { selectTotalAmount } from '@/lib/redux/features/cart/selector';

import styles from './index.module.scss';

export const CartCounter: FunctionComponent = () => {
    const counter = useSelector((state: ReduxStore) =>
        selectTotalAmount(state)
    );
    return (
        <>
            {counter > 0 ? (
                <Link href='/cart' className={styles.container}>
                    <span className={styles.count}>{counter}</span>
                </Link>
            ) : null}
        </>
    );
};
