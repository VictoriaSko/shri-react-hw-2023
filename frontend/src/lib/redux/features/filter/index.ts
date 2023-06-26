import { FilterStore } from '@/types/reduxStore';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FilterStore = {
    title: null,
    genre: null,
    cinema: null,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeTitleFilter: (state, { payload }) => {
            state.title = payload;
        },
        changeGenreFilter: (state, { payload }) => {
            state.genre = payload;
        },
        changeCinemaFilter: (state, { payload }) => {
            state.cinema = payload;
        },
        reset: () => initialState,
    },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
