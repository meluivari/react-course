import { useEffect, useState } from "react";
import { Movie, getMoviesAsync } from "../utils/movies";
import { MovieRow } from "./MovieRow";

export function MovieList() {

    const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await getMoviesAsync();
            setMovies(data);
        };
        loadMovies(); 
    }, []);

    if (!movies) {
        return <div>Loading movies...</div>
    }

    return <div>
        { movies.map(movie => {
            return <MovieRow key={movie.id} img={movie.img} title={movie.title} />
        })
        }
    </div>
};