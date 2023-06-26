import React, { FunctionComponent } from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { Genre, Movie } from '@/common/const/movies';
import { ProductCounter } from '@/common/components/ProductCounter';

import { DeleteProductButton } from '@/common/components/DeleteProductButton';

import styles from './index.module.scss';

type Props = {
    withDeleteButton?: boolean;
} & Movie;

export const MovieBlock: FunctionComponent<Props> = ({
    id,
    posterUrl,
    title,
    genre,
    withDeleteButton,
}) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.posterImage}
                src={posterUrl}
                alt={title}
                width={100}
                height={120}
                loading='lazy'
            />
            <div className={styles.infoContainer}>
                <Link href={`/movie/${id}`}>
                    <h2 className={styles.title}>{title}</h2>
                </Link>
                <span className={styles.genre}>{Genre[genre]}</span>
            </div>
            <ProductCounter id={id} withDeleteDialog={withDeleteButton} />
            {withDeleteButton && <DeleteProductButton id={id} />}
        </div>
    );
};
