'use client';

import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { selectProductAmount } from '@/lib/redux/features/cart/selector';

import { cartActions } from '@/lib/redux/features/cart';

import { ReduxStore } from '@/types/reduxStore';

import { MIN_PRODUCTS_COUNT } from '@/common/const/cartStore';

import { MinusIcon } from '@/icons/MinusIcon';
import { IconColors } from '@/common/const/colors';

import styles from './index.module.scss';

type ButtonProps = {
    id: string;
    onDelete: (id: string) => void;
    withDeleteDialog?: boolean;
};

export const DecrementButton: FunctionComponent<ButtonProps> = ({
    id,
    onDelete,
    withDeleteDialog,
}) => {
    const productAmount = useSelector((state: ReduxStore) =>
        selectProductAmount(state, id)
    );
    const dispatch = useDispatch();

    const handleDecrement = useCallback(
        () =>
            withDeleteDialog && productAmount === 1
                ? onDelete(id)
                : dispatch(cartActions.decrement(id)),
        [dispatch, id, onDelete, productAmount, withDeleteDialog]
    );

    const isDisabled = productAmount === MIN_PRODUCTS_COUNT;

    return (
        <button
            className={classNames(styles.container, {
                [styles.isDisabled]: isDisabled,
            })}
            onClick={isDisabled ? () => {} : handleDecrement}
        >
            <MinusIcon className={styles.icon} fill={IconColors.White} />
        </button>
    );
};
