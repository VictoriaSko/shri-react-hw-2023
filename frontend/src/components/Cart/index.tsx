'use client';

import React, { FunctionComponent, useMemo } from 'react';
import classNames from 'classnames';

import Link from 'next/link';

import { useMoviesInCart } from '@/lib/hooks/useMoviesInCart';

import { MovieBlock } from '../Main/MovieBlock';

import { Movie } from '@/common/const/movies';

import { Loader } from '@/common/components/Loader';
import { TotalAmount } from './TotalAmount';

import styles from './index.module.scss';

export const Cart: FunctionComponent = () => {
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
                    <TotalAmount />
                </>
            )}
        </div>
    );
};
