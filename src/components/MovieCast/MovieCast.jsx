import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCastById } from "../../services/api";
import styles from './MovieCast.module.css'
import Loader from "../Loader/Loader";



const MovieCast = () => {
    const { movieId } = useParams()
    const [isLoader, setIsLoader] = useState(false);
     const [isError, setIsError] = useState(false);
    const [casts, setCasts] = useState([])
    useEffect(() => {
      const getCast = async () => {
        try {
          setIsError(false);
          setIsLoader(true);
          const data = await fetchCastById(movieId)
          setCasts(data);
        } catch  {
          setIsError(true);
        } finally {
          setIsLoader(false);
        }
      };
        getCast()
    },[movieId])
  if (casts.length === 0) {
    return <Loader/>;
  }
  return (
      <div>
          <h2>Movie casts</h2>
      <ul className={styles.castList}>
        {isLoader && <Loader />}
        {isError && <p>Error 404</p>}
        {casts?.map((cast) => (
          <li key={cast.id} className={styles.castMember}>
            <img
              className={styles.memberImg}
              width={60}
              src={
                cast.profile_path && `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                 
              }
              alt={cast.name}
            />
            <p className={styles.memberName}>{cast.name}</p>
            <p className={styles.characterName}>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieCast