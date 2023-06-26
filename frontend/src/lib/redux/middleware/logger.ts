import { ReduxStore } from '@/types/reduxStore';
import { Action } from '@reduxjs/toolkit';

export const logger =
    (store: ReduxStore) =>
    (next: (action: Action) => void) =>
    (action: Action) => {
        console.log(action);
        next(action);
    };
