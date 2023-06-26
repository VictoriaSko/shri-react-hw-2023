'use client';

import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { selectProductAmount } from '@/lib/redux/features/cart/selector';

import { ReduxStore } from '@/types/reduxStore';

import { MAX_PRODUCTS_COUNT } from '@/common/const/cartStore';

import { IconColors } from '@/common/const/colors';

import { PlusIcon } from '@/icons/PlusIcon';

import { cartActions } from '@/lib/redux/features/cart';

import styles from './index.module.scss';

type ButtonProps = {
    id: string;
};

export const IncrementButton: FunctionComponent<ButtonProps> = ({ id }) => {
    const productAmount = useSelector((state: ReduxStore) =>
        selectProductAmount(state, id)
    );
    const dispatch = useDispatch();

    const handleIncrement = useCallback(
        () => dispatch(cartActions.increment(id)),
        [dispatch, id]
    );

    const isDisabled = productAmount === MAX_PRODUCTS_COUNT;

    return (
        <button
            className={classNames(styles.container, {
                [styles.isDisabled]: isDisabled,
            })}
            onClick={isDisabled ? () => {} : handleIncrement}
        >
            <PlusIcon className={styles.icon} fill={IconColors.White} />
        </button>
    );
};
