'use client';

import React from 'react';
import classNames from 'classnames';

import Image from 'next/image';

import { useGetMovieByIdQuery } from '@/lib/redux/services/movieApi';
import { Loader } from '@/common/components/Loader';

import styles from './index.module.scss';
import { ProductCounter } from '@/common/components/ProductCounter';
import { Genre } from '@/common/const/movies';
import { Review } from './Review';

type Props = {
    id: string;
};

export const Movie = ({ id }: Props) => {
    const { data: movie, isLoading, error } = useGetMovieByIdQuery(id);

    return (
        <div
            className={classNames(styles.container, {
                [styles.isLoading]: isLoading,
            })}
        >
            {isLoading ? (
                <Loader />
            ) : (
                movie && (
                    <>
                        <div className={styles.movieContainer}>
                            <Image
                                className={styles.posterImage}
                                src={movie.posterUrl}
                                alt={movie.title}
                                width={400}
                                height={500}
                            />
                            <div className={styles.titleContainer}>
                                <h1 className={styles.title}>{movie.title}</h1>
                                <ProductCounter id={id} />
                            </div>
                            <div className={styles.movieInfo}>
                                <div className={styles.genreContainer}>
                                    <h3 className={styles.title}>Жанр:</h3>
                                    <span className={styles.value}>
                                        {Genre[movie.genre]}
                                    </span>
                                </div>
                                <div className={styles.yearContainer}>
                                    <h3 className={styles.title}>
                                        Год выпуска:
                                    </h3>
                                    <span className={styles.value}>
                                        {movie.releaseYear}
                                    </span>
                                </div>
                                <div className={styles.ratingContainer}>
                                    <h3 className={styles.title}>Рейтинг:</h3>
                                    <span className={styles.value}>
                                        {movie.rating}
                                    </span>
                                </div>
                                <div className={styles.directorContainer}>
                                    <h3 className={styles.title}>Режиссер:</h3>
                                    <span className={styles.value}>
                                        {movie.director}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.descriptionContainer}>
                                <h3 className={styles.title}>Описание</h3>
                                <span className={styles.value}>
                                    {movie.description}
                                </span>
                            </div>
                        </div>
                        {movie.reviews &&
                            movie.reviews.length > 0 &&
                            movie.reviews.map((review) => (
                                <Review key={review.id} {...review} />
                            ))}
                    </>
                )
            )}
        </div>
    );
};
