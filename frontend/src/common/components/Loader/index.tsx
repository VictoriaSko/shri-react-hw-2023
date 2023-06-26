import React from 'react';

import styles from './index.module.scss';

export const Loader = () => {
    return (
        <div className={styles.ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
