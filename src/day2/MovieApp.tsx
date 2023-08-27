import { FavoriteMoviesProvider } from "./FavoritesContext";
import { MovieList } from "./MovieList";
import { NavBar } from "./NavBar";

export function MovieApp() {
  return (
    <FavoriteMoviesProvider>
      <div>
        <NavBar user="Guest" />
        <MovieList />
      </div>
    </FavoriteMoviesProvider>
  );
}
