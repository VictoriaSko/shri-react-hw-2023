import React from 'react';

import styles from './index.module.scss';

export const Title = ({ title }: { title: string }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};
