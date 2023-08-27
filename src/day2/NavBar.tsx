import { useFavorites } from "./useFavorites";

export function NavBar({ user }: { user: string }) {
  const { favorites } = useFavorites();
  const favCount = favorites.length;
  return (
    <div>
      <span>{`Welcome ${user}`}</span>
      <br />
      <span>{`Favorites : ${favCount}`}</span>
    </div>
  );
}
