import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import { Review as ReviewType } from '@/common/const/movies';

import { DefaultImageIcon } from '@/icons/DefaultImageIcon';

import styles from './index.module.scss';

export const Review: FunctionComponent<ReviewType> = ({
    name,
    text,
    rating,
    profilePicture,
}) => {
    return (
        <div className={styles.container}>
            {profilePicture ? (
                <Image alt={'profile picture'} src={profilePicture} />
            ) : (
                <div className={styles.defaultProfilePicture}>
                    <DefaultImageIcon className={styles.icon} />
                </div>
            )}
            <div className={styles.infoContainer}>
                <div className={styles.nameContainer}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.ratingContainer}>
                        <h3 className={styles.name}>Оценка:</h3>
                        <span className={styles.rating}>{rating}</span>
                    </div>
                </div>
                <div className={styles.reviewContainer}>
                    <span className={styles.review}>{text}</span>
                </div>
            </div>
        </div>
    );
};
