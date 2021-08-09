import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface MovieContextProps {
  children: ReactNode;
}

interface Movies {
  id: string;
  title: string;
}

interface MovieContextDefault {
  movies: Movies[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}

const movieContextDefaultData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(
  movieContextDefaultData
);

const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovie] = useState<Movies[]>(movieContextDefaultData.movies);
  const addMovie = (title: string) =>
    setMovie([...movies, { id: uuidv4(), title }]);

  const deleteMovie = (id: string) =>
    setMovie(movies.filter((movie) => movie.id !== id));

  const MovieContextInitial = {
    movies,
    addMovie,
    deleteMovie,
  };

  return (
    <MovieContext.Provider value={MovieContextInitial}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
