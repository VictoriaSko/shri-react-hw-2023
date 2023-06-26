'use client';

import React, { FunctionComponent, useMemo } from 'react';

import { useMoviesInCart } from '@/lib/hooks/useMoviesInCart';

import { MovieBlock } from '../Main/MovieBlock';

import { Movie } from '@/common/const/movies';
import { useSelector } from 'react-redux';
import { ReduxStore } from '@/types/reduxStore';
import { selectTotalAmount } from '@/lib/redux/features/cart/selector';

import styles from './index.module.scss';
import { Loader } from '@/common/components/Loader';
import classNames from 'classnames';
import Link from 'next/link';

export const Cart: FunctionComponent = () => {
    const totalAmount = useSelector((state: ReduxStore) =>
        selectTotalAmount(state)
    );
    const { data, isLoading, error } = useMoviesInCart();

    const items = useMemo(() => {
        return (
            data?.map((movie: Movie) => (
                <MovieBlock key={movie.id} {...movie} withDeleteButton />
            )) || []
        );
    }, [data]);

    return (
        <div
            className={classNames(styles.container, {
                [styles.isLoading]: isLoading,
            })}
        >
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {items.length > 0 ? (
                        <div className={styles.itemsContainer}>{items}</div>
                    ) : (
                        <div className={styles.emptyCart}>
                            <h1 className={styles.title}>
                                В корзине нет билетов
                            </h1>
                            <span className={styles.info}>
                                Выберите фильм на{' '}
                                <Link href='/' className={styles.mainLink}>
                                    главной странице
                                </Link>{' '}
                                и добавьте его в корзину
                            </span>
                        </div>
                    )}
                    <div className={styles.totalAmountContainer}>
                        <h2 className={styles.title}>Итого билетов:</h2>
                        <span className={styles.amount}>{totalAmount}</span>
                    </div>
                </>
            )}
        </div>
    );
};
