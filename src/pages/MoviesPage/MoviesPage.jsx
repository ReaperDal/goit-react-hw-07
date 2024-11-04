import { useEffect, useRef, useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {

  const query = searchParams.get("query") ?? "";
  const inputRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();


  const getMovies = async (query) => {
    try {
      setIsError(false);
      setIsLoader(true);
      const data = await fetchMoviesByQuery(query);
      setMovies(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    if (query) {
      getMovies(query);
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = inputRef.current.value.trim();
    if (!searchInput) {
      return;
    }
    setSearchParams({ query: searchInput });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          placeholder="Search for a movie..."
        />
        <button className={styles.formBtn} type="submit">
          Search
        </button>
      </form>
      {isLoader && <Loader />}
      {isError && <p>Error 404</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
