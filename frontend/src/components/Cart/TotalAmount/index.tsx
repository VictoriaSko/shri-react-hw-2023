'use client';

import React from 'react';

import { useSelector } from 'react-redux';
import { ReduxStore } from '@/types/reduxStore';
import { selectTotalAmount } from '@/lib/redux/features/cart/selector';

import styles from './index.module.scss';

export const TotalAmount = () => {
    const totalAmount = useSelector((state: ReduxStore) =>
        selectTotalAmount(state)
    );

    return (
        <div className={styles.totalAmountContainer}>
            <h2 className={styles.title}>Итого билетов:</h2>
            <span className={styles.amount}>{totalAmount}</span>
        </div>
    );
};
