'use client';

import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';
import { ReduxStore } from '@/types/reduxStore';
import { selectProductAmount } from '@/lib/redux/features/cart/selector';

type ButtonProps = {
    id: string;
};

export const Count: FunctionComponent<ButtonProps> = ({ id }) => {
    const productAmount = useSelector((state: ReduxStore) =>
        selectProductAmount(state, id)
    );

    return <span className={styles.count}>{productAmount}</span>;
};
