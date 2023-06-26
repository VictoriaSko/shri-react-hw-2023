'use client';

import React, { useMemo } from 'react';
import { useFilters } from '@/lib/hooks/useFilters';

import { DropdownInput } from '@/common/components/DropdownInput';
import { Filters, Genre } from '@/common/const/movies';

export const GenreDropdown = () => {
    const { value, onChange } = useFilters<{ id: string; name: string }, 'id'>({
        type: Filters.genre,
        key: 'id',
    });

    const items = useMemo(
        () =>
            Object.keys(Genre).map((key) => ({
                id: key,
                name: Genre[key],
            })),
        []
    );

    return (
        <DropdownInput
            items={items}
            value={value?.name || ''}
            onSelect={onChange}
            placeholder='Выберите жанр'
            label='Жанр'
        />
    );
};
