import { Suspense, useEffect, useRef, useState } from "react";
import {  NavLink,  useParams,  Outlet,  Link,  useLocation} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import clsx from "clsx";
import styles from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const goBackRef = useRef(location.state);
  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const data = await fetchMovieById(movieId);
        setMovie(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    getMovie();
  }, [movieId]);

  if (!movie) return <Loader />;

  return (
    <div>
      {isLoader && <Loader />}
      {isError && <p>Error 404</p>}
      <div className={styles.containerBox}>
        <Link to={goBackRef.current} className={styles.link}>
          Go back
        </Link>
        <div className={styles.container}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className={styles.containerinfo}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <ul>
              <p>Genres</p>
              {movie.genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.details}>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
