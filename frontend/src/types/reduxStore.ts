export type CartStore = {
    totalAmount: number;
    [key: string]: number;
};

export type ReduxStore = {
    cart: CartStore;
    filter: FilterStore;
};

export type FilterStore = {
    title: string | null;
    genre: string | null;
    cinema: string | null;
};

export type Cinema = {
    id: string;
    name: string;
    movieIds: string[];
};
