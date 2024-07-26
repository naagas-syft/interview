"use client"

import FallbackImg from "@/components/fallbackImg";
import Fav from "@/components/fav";
import {toggleFavoriteMovie} from "@/server/providers/imdb";

export const MovieCard = async (props) => {
    const movie = props.movie;

    return (
        (
            <div key={movie.imdbID} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <FallbackImg data={movie}/>
                <Fav data={movie} imdb={movie.imdbID} toggleFavoriteMovie={toggleFavoriteMovie}
                     favourite={movie.favourite}/>
                <div className="mt-4">
                    <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                        {movie.title}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {movie.plot}
                    </p>
                </div>
            </div>
        ))
}
export default MovieCard;
