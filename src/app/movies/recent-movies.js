import {getRecentMovies} from "@/server/movies";
import {Suspense} from "react";
import MovieCard from "@/components/movieCard";


async function LoadedRecentMovies() {
    const movies = await getRecentMovies();

    // TODO: get carousel working.
    return (
        <div className="grid gap-4 lg:grid-cols-5">
            {movies.map((movie) => {
                    return <MovieCard key={movie.imdbid} movie={movie}/>
                }
            )}
        </div>
    );
}

export default function RecentMovies() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoadedRecentMovies/>
        </Suspense>
    );
}
