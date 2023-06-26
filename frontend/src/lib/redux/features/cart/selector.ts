import { ReduxStore } from '@/types/reduxStore';

const selectCartModule = (state: ReduxStore) => state.cart;

const selectProductAmount = (state: ReduxStore, id: string) =>
    selectCartModule(state)[id] || 0;

const selectTotalAmount = (state: ReduxStore) =>
    selectCartModule(state)['totalAmount'] || 0;

const selectAllProductsIds = (state: ReduxStore) =>
    Object.keys(selectCartModule(state)).filter((id) => id !== 'totalAmount') ||
    [];

export { selectProductAmount, selectTotalAmount, selectAllProductsIds };
