import React, { FunctionComponent } from 'react';

import { FiltersContainer } from './FiltersСontainer';
import { MoviesList } from './MoviesList';

import styles from './index.module.scss';

export const Main: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <FiltersContainer />
            <MoviesList />
        </div>
    );
};
