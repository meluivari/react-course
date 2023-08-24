export type Movie = {
  id: number;
  title: string;
  img: string;
  info?: string;
  genre?: "action" | "fantasy" | "drama";
};

export const getMovies = (): Movie[] => [
  {
    id: 0,
    title: "Star Wars IV: A new hope",
    img: "https://i.imgur.com/LpVmm02.jpeg",
  },
  {
    id: 1,
    title: "Star Wars V: The Empire strikes back",
    img: "https://i.imgur.com/klKfEvi.jpeg",
  },
  {
    id: 2,
    title: "Star Wars VI: Return of the Jedi",
    img: "https://i.imgur.com/0kV0pS5.jpeg",
  },
];

export const getMoviesAsync = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMovies());
    }, 800);
  });
};
