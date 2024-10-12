import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/api"

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchMovieById(movieId)
            setMovie(data)
        }
        getMovie()
    }, [movieId])

    if (!movie) return <h2>Loading...</h2>
    
  return (
      <div>
           <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
          <h2>{movie.original_title}</h2>
      <p>{movie.overview}</p>
     </div>
  )
}

export default MovieDetailsPage