"use server";

import data from "./data.json";


const transposeData = (data) => {
    const returnData = data.map((item) => {
        Object.keys(item).map(obj => {
            item[obj.toLowerCase()] = item[obj];
        });
        return item;
    });

    return returnData;
}

export async function getMovies() {
    const tData = transposeData(data.movies);
    return tData;
}

export const toggleFavoriteMovie = (imdbID) => {
    if (imdbID) {
        data.movies.forEach((item) => {
            if ((item.imdbid === imdbID || item.imdbID===imdbID )&& !item?.Favourite) {
                item.Favourite = true;
            } else if ((item.imdbid === imdbID || item.imdbID===imdbID) && item.Favourite===true) {
                item.Favourite = false;
            }
        });
    }

}
