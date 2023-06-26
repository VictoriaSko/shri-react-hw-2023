import React from 'react';

import styles from './index.module.scss';

export const Item = ({ description }: { description: string }) => {
    return (
        <div className={styles.container}>
            <span className={styles.description}>{description}</span>
        </div>
    );
};
