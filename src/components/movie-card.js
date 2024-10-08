import Image from "next/image";

export default function MovieCard({ movie }) {
    return (
        <div key={movie.id} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Image
            src={movie.poster}
            alt={movie.title}
            className="rounded-lg w-full h-64 object-cover"
            width={300}
            height={450}
        />
        <div className="mt-4">
            <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                {movie.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                {movie.plot}
            </p>
        </div>
    </div>        
    )
}