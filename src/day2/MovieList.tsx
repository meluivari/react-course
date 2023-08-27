import { useEffect, useState } from "react";
import { getMoviesAsync, Movie } from "../utils/movies";
import { useFavorites } from "./useFavorites";
import { MovieRow } from "./Movie";

type Props = {
  listTitle?: string;
};

export function MovieList({ listTitle }: Props) {
  const [data, setData] = useState<Movie[]>();

  const { addFavorite, isFavorite, removeFavorite } = useFavorites();

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
          {data.map((movie) => (
            <MovieRow
              favorite={isFavorite(movie.id)}
              onAddFavorite={() => addFavorite(movie.id)}
              onRemoveFavorite={() => removeFavorite(movie.id)}
              key={movie.id}
              {...movie}
            />
          ))}
        </>
      )}
    </>
  );
}
