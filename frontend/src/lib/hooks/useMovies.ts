'use client';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
    selectCinemaFilter,
    selectGenreFilter,
    selectTitleFilter,
} from '../redux/features/filter/selector';
import { ReduxStore } from '@/types/reduxStore';
import { useGetMoviesByCinemaByIdQuery } from '../redux/services/movieApi';
import { Movie } from '@/common/const/movies';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

interface MovieQueryResult {
    data?: Movie[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
}

export const useMovies = (): MovieQueryResult => {
    const titleFilter = useSelector((state: ReduxStore) =>
        selectTitleFilter(state)
    );
    const genreFilter = useSelector((state: ReduxStore) =>
        selectGenreFilter(state)
    );
    const cinemaFilter = useSelector((state: ReduxStore) =>
        selectCinemaFilter(state)
    );

    const {
        data: moviesData,
        isLoading: isMoviesLoading,
        error: moviesError,
    } = useGetMoviesByCinemaByIdQuery(cinemaFilter);

    const filteredData = useMemo(() => {
        if (!moviesData) return moviesData;
        let newData = [...moviesData];
        if (titleFilter) {
            newData = newData.filter((movie) =>
                movie.title.startsWith(titleFilter)
            );
        }
        if (genreFilter) {
            newData = newData.filter((movie) => movie.genre === genreFilter);
        }
        return newData;
    }, [genreFilter, moviesData, titleFilter]);

    return {
        data: filteredData,
        isLoading: isMoviesLoading,
        error: moviesError,
    };
};
