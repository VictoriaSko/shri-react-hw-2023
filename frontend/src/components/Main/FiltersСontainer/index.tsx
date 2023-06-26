'use client';

import React, { FunctionComponent, useEffect, useState } from 'react';

import { TitleInput } from './TitleInput';

import { GenreDropdown } from './GenreDropdown';
import { CinemaDropdown } from './Cinema';

import { useMovies } from '@/lib/hooks/useMovies';

import { useSelector } from 'react-redux';
import { ReduxStore } from '@/types/reduxStore';
import {
    selectCinemaFilter,
    selectGenreFilter,
    selectTitleFilter,
} from '@/lib/redux/features/filter/selector';

import styles from './index.module.scss';

const PADDING_OFFSET = 56;

export const FiltersContainer: FunctionComponent = () => {
    const { isLoading } = useMovies();
    const titleFilter = useSelector((state: ReduxStore) =>
        selectTitleFilter(state)
    );
    const genreFilter = useSelector((state: ReduxStore) =>
        selectGenreFilter(state)
    );
    const cinemaFilter = useSelector((state: ReduxStore) =>
        selectCinemaFilter(state)
    );

    const [containerStyle, setContainerStyle] = useState<React.CSSProperties>(
        {}
    );

    useEffect(() => {
        getTopOffset();
    }, [isLoading, titleFilter, genreFilter, cinemaFilter]);

    useEffect(() => {
        document.addEventListener('scroll', getTopOffset);

        return () => {
            document.removeEventListener('scroll', getTopOffset);
        };
    }, []);

    const getTopOffset = () => {
        const footerTop =
            document.querySelector('footer')?.getBoundingClientRect()?.top || 0;
        setContainerStyle({
            '--top-offset': `${footerTop - PADDING_OFFSET}px`,
        } as React.CSSProperties);
    };

    return (
        <div className={styles.container} style={containerStyle}>
            <h3 className={styles.title}>Фильтр поиска</h3>
            <div className={styles.filterContainer}>
                <TitleInput />
                <GenreDropdown />
                <CinemaDropdown />
            </div>
        </div>
    );
};
