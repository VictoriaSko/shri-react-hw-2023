'use client';

import React, { useMemo } from 'react';

import { DropdownInput } from '@/common/components/DropdownInput';
import { useGetCinemasQuery } from '@/lib/redux/services/movieApi';
import { Cinema } from '@/types/reduxStore';
import { useFilters } from '@/lib/hooks/useFilters';
import { Filters } from '@/common/const/movies';

export const CinemaDropdown = () => {
    const { data, isLoading, error } = useGetCinemasQuery({});
    const { value, onChange } = useFilters<Cinema, 'id'>({
        type: Filters.cinema,
        key: 'id',
    });

    const items = useMemo(() => {
        const fetchedItems = data || [];

        return fetchedItems.length > 0
            ? [{ id: 'none', name: 'Не выбрано' }].concat(fetchedItems)
            : [];
    }, [data]);

    return (
        <DropdownInput
            items={items}
            value={value?.name || ''}
            onSelect={onChange}
            placeholder='Выберите кинотеатр'
            label='Кинотеатр'
            disabled={Boolean(isLoading || error || !data)}
        />
    );
};
