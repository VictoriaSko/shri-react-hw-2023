import React from 'react';

import { Movie } from '@/components/Movie';

export default function MoviePage({ params }: { params: { movieId: string } }) {
    return <Movie id={params.movieId} />;
}
