import {
    MAX_PRODUCTS_COUNT,
    MIN_PRODUCTS_COUNT,
} from '@/common/const/cartStore';
import { CartStore } from '@/types/reduxStore';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CartStore = {
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            const productCount = state[payload] || MIN_PRODUCTS_COUNT;
            if (productCount < MAX_PRODUCTS_COUNT) {
                state[payload] = productCount + 1;
                state.totalAmount = state.totalAmount + 1;
            }
        },
        decrement: (state, { payload }) => {
            const productCount = state[payload];

            if (!productCount) return;

            state.totalAmount = state.totalAmount - 1;

            if (productCount === 1) {
                delete state[payload];
                return;
            }

            state[payload] = productCount - 1;
        },
        delete: (state, { payload }) => {
            const productCount = state[payload];
            if (productCount) {
                state.totalAmount = state.totalAmount - productCount;
                delete state[payload];
            }
        },
        add: (state, { payload }) => {
            if (!state[payload]) {
                state[payload] = MIN_PRODUCTS_COUNT;
            }
        },
        reset: () => initialState,
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
