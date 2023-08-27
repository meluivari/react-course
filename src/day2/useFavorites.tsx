import { useFavoritesStore } from "./FavoritesContext";

export function useFavorites() {
  const { favorites, setFavorites } = useFavoritesStore();

  const addFavorite = (id: number) => setFavorites([...favorites, id]);
  const removeFavorite = (id: number) =>
    setFavorites(favorites.filter((it) => it !== id));
  const isFavorite = (id: number) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
