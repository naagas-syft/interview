"use server";

import { getMovies as getImdb } from "./providers/imdb";
import { getMovies as getRT } from "./providers/rt";

// HINT: these functions run on the server. console.log will output to the terminal.

export async function getRecentMovies() {
    // Recent movies only shows the top 5 movies from both providers.
    // so "Breaking bad" will not be shown in the recent movies. This is not a bug.
    const movies = [...await getImdb(), ...await getRT()]
    return movies.slice(0, 5);
}

export async function getGenereAndMovies() {
    // TODO: sort genres by the name. (Bug 2)
    const movies = [...await getImdb(), ...await getRT()]
    const genres = movies.reduce((acc, movie) => {
        const genres = movie.genre?.split(",").map((genre) => genre.trim());
        genres?.forEach((genre) => {
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push(movie);
        });
        return acc;
    }, {});    
    return Object.entries(genres).map(([genre, movies]) => ({title: genre, movies}));
}