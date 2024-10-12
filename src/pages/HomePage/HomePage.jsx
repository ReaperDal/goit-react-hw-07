import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesDay } from "../../services/api";

const HomePage = () => {
   const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMoviesDay = async () => {
      const data = await fetchMoviesDay();
      setMovies(data);
    };
    getMoviesDay();
    
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
