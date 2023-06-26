'use client';

import React, { FunctionComponent, useEffect, useMemo } from 'react';

import { Movie } from '@/common/const/movies';
import { MovieBlock } from '../MovieBlock';
import { Loader } from '@/common/components/Loader';

import classNames from 'classnames';
import { useMovies } from '@/lib/hooks/useMovies';

import styles from './index.module.scss';

export const MoviesList: FunctionComponent = () => {
    const { data, isLoading, error } = useMovies();

    const items = useMemo(() => {
        return (
            data &&
            data.map((movie: Movie) => <MovieBlock key={movie.id} {...movie} />)
        );
    }, [data]);

    return (
        <div
            className={classNames(styles.container, {
                [styles.isLoading]: isLoading,
            })}
        >
            {isLoading ? <Loader /> : items}
        </div>
    );
};
