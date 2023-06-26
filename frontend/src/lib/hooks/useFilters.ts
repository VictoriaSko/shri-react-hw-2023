'use client';

import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../redux/features/filter';
import { Filters } from '@/common/const/movies';

export const useFilters = <T, Key extends keyof T>({
    type,
    key,
}: {
    type: string;
    key: Key;
}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<T | null>(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            handleUpdateFilter(value?.[key]?.toString() || null);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    const handleUpdateFilter = useCallback(
        (newFilter: string | null) => {
            if (type === Filters.cinema) {
                dispatch(filterActions.changeCinemaFilter(newFilter));
            } else if (type === Filters.genre) {
                dispatch(filterActions.changeGenreFilter(newFilter));
            } else if (type === Filters.title) {
                dispatch(filterActions.changeTitleFilter(newFilter));
            }
        },
        [dispatch, type]
    );

    const onChange = (newFilter: T) => {
        if (newFilter[key] === 'none') {
            setValue(null);
        } else {
            setValue(newFilter);
        }
    };

    return { value, onChange };
};
