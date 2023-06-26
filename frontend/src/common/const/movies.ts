export type Movie = {
    id: string;
    description: string;
    director: string;
    genre: string;
    posterUrl: string;
    title: string;
    reviewIds: string[];
    releaseYear: number;
    rating: string;
    reviews?: Review[];
};

export type Review = {
    id: string;
    name: string;
    text: string;
    rating: number;
    profilePicture?: string;
};

export const Genre: { [key: string]: string } = {
    none: 'Не выбран',
    fantasy: 'Фэнтези',
    horror: 'Ужасы',
    action: 'Боевик',
    comedy: 'Комедия',
};

export const Filters = {
    title: 'Title',
    genre: 'Genre',
    cinema: 'Cinema',
};
