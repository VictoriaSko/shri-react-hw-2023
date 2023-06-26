import { Movie, Review } from '@/common/const/movies';
import { Cinema } from '@/types/reduxStore';
import {
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getMovieById: builder.query<Movie, string>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const movie = await fetchWithBQ(`movie?movieId=${_arg}`);
                if (movie.error || !movie)
                    return { error: movie.error as FetchBaseQueryError };
                const reviews = await fetchWithBQ(`reviews?movieId=${_arg}`);
                return {
                    data: {
                        ...(movie.data as Movie),
                        reviews: reviews.data as Review[],
                    },
                };
            },
        }),
        getMovies: builder.query<Movie[], any>({ query: () => 'movies' }),
        getCinemas: builder.query<Cinema[], any>({ query: () => 'cinemas' }),
        getMoviesByCinemaById: builder.query<Movie[], string | undefined>({
            query: (cinemaId) =>
                cinemaId ? `movies?cinemaId=${cinemaId}` : 'movies',
        }),
        getMoviesInCart: builder.query<Movie[], string[]>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const promises = _arg.map(async (id) => {
                    const result = await fetchWithBQ(`movie?movieId=${id}`);
                    return result.data as Movie;
                });
                const result = await Promise.all(promises);
                result.sort((a, b) => _arg.indexOf(a.id) - _arg.indexOf(b.id));
                return { data: result };
            },
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetCinemasQuery,
    useGetMoviesByCinemaByIdQuery,
    useGetMovieByIdQuery,
    useGetMoviesInCartQuery,
} = movieApi;
