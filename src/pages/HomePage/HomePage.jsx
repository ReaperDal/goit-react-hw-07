import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesDay } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const [isLoader, setIsLoader] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMoviesDay = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const data = await fetchMoviesDay();
        setMovies(data);
      }
      catch {
      setIsError(true)
      }
      finally {
        setIsLoader(false)
      }
    };
    getMoviesDay();
    
  }, []);
  return (

    <div>
      <h2>Trending today</h2>
      {isLoader && <Loader />}
      {isError && <p>Error 404</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
    
  );
};

export default HomePage;
