"use client"
import {Star, StarOff} from "lucide-react";
import {useEffect, useState} from "react";

const Fav = (props) => {

    const [imdb, setImdb] = useState(null);
    const handleFavAndReload = async () => {
        await props.toggleFavoriteMovie(imdb);
        window.location.reload();
    }

    useEffect(() => {
        if (imdb) {
            handleFavAndReload()
        }
    }, [imdb]);

    return (
        <div className="flex flex-row justify-end gap-2" onClick={() =>
            setImdb(props.imdb)
        }>
            {!props.favourite ? <StarOff/> : <Star/>}
        </div>
    )
}
export default Fav;
