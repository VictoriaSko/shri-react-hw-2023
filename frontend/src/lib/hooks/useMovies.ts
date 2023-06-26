'use client';

import { useCallback } from 'react';
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

    const selectFromResult = useCallback(
        ({ data, isLoading, error }: MovieQueryResult) => {
            if (!data) return { data, isLoading, error };
            let newData = [...data];
            if (titleFilter) {
                newData = newData.filter((movie) =>
                    movie.title.startsWith(titleFilter)
                );
            }
            if (genreFilter) {
                newData = newData.filter(
                    (movie) => movie.genre === genreFilter
                );
            }
            return { data: newData, isLoading, error };
        },
        [genreFilter, titleFilter]
    );

    const {
        data: moviesData,
        isLoading: isMoviesLoading,
        error: moviesError,
    } = useGetMoviesByCinemaByIdQuery(cinemaFilter, {
        selectFromResult,
    });

    return {
        data: moviesData,
        isLoading: isMoviesLoading,
        error: moviesError,
    };
};
