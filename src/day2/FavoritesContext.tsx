import { createContext, PropsWithChildren, useContext, useState } from "react";

const FavoritesContext = createContext<{
  favorites: number[];
  setFavorites: (ids: number[]) => void;
}>({
  favorites: [],
  setFavorites: () => {},
});

export function FavoriteMoviesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<number[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesStore() {
  const value = useContext(FavoritesContext);
  return value;
}
