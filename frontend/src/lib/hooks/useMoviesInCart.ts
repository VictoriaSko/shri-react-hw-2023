'use client';

import { ReduxStore } from '@/types/reduxStore';
import { useSelector } from 'react-redux';
import { selectAllProductsIds } from '../redux/features/cart/selector';
import { useGetMoviesInCartQuery } from '../redux/services/movieApi';

export const useMoviesInCart = () => {
    const allProductIds = useSelector((state: ReduxStore) =>
        selectAllProductsIds(state)
    );

    const { data, isLoading, error } = useGetMoviesInCartQuery(allProductIds);

    return { data, isLoading, error };
};
