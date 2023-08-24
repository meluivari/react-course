import { useEffect, useState } from "react";
import { getMoviesAsync, Movie } from "../utils/movies";
import { MovieRow } from "./Movie";

type Props = {
  listTitle?: string;
  onItemClick: (movie: Movie) => void;
};

export function MovieList({ listTitle }: Props) {
  const [data, setData] = useState<Movie[]>();

  useEffect(() => {
    getMoviesAsync().then(setData);
  }, []);

  if (data === undefined) {
    //Still loading...
    return <p>Loading...</p>;
  }
  return (
    <>
      {listTitle && <p>{listTitle}</p>}
      {data.length === 0 ? (
        <p>No videos.</p>
      ) : (
        <>
          <div>Favorite movies: ?</div>
          {data.map((movie) => (
            <MovieRow key={movie.id} {...movie} />
          ))}
        </>
      )}
    </>
  );
}
