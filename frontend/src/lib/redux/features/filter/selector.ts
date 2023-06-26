import { ReduxStore } from '@/types/reduxStore';

const selectFilterModule = (state: ReduxStore) => state.filter;

const selectTitleFilter = (state: ReduxStore) =>
    selectFilterModule(state).title || '';

const selectGenreFilter = (state: ReduxStore) =>
    selectFilterModule(state).genre || '';

const selectCinemaFilter = (state: ReduxStore) =>
    selectFilterModule(state).cinema || '';

export { selectTitleFilter, selectGenreFilter, selectCinemaFilter };
