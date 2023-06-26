'use client';

import React, { ChangeEvent } from 'react';
import { useFilters } from '@/lib/hooks/useFilters';

import { Input } from '@/common/components/Input';
import { Filters } from '@/common/const/movies';

export const TitleInput = () => {
    const { value, onChange } = useFilters<{ id: string; name: string }, 'id'>({
        type: Filters.title,
        key: 'id',
    });

    const handleInputChange = (event: ChangeEvent) => {
        const newValue =
            (event.currentTarget as HTMLTextAreaElement)?.value || '';

        if (newValue === '') {
            onChange({ id: 'none', name: newValue });
        } else {
            onChange({ id: newValue, name: newValue });
        }
    };

    return (
        <Input
            label='Название'
            placeholder='Введите название'
            value={value?.name || ''}
            onChange={handleInputChange}
        />
    );
};
