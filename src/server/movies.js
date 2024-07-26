"use server";

import { getMovies as getImdb } from "./providers/imdb";
import { getMovies as getRT } from "./providers/rt";

export async function getRecentMovies() {
    const movies = [...await getImdb(), ...await getRT()]
    return movies;
}

export async function getGenereAndMovies() {
    // TODO: sort genres by the name.
    const movies = [...await getImdb(), ...await getRT()]
    const genres = movies.reduce((acc, movie) => {
        const genres = movie.Genre?.split(",").map((genre) => genre.trim());
        genres?.forEach((genre) => {
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push(movie);
        });
        return acc;
    }, {});
    const sortedGenres= Object.keys(genres ).sort();
    const newObj={}
    sortedGenres.map(gen=>{
       return newObj[gen]=genres[gen];
        });
    return Object.entries(newObj).map(([genre, movies]) => ({Title: genre, movies}));
}
