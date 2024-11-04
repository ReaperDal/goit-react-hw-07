import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchReviewsById } from "../../services/api";
import Loader from "../Loader/Loader";


const MovieReviews = () => {
  const [isLoader, setIsLoader] = useState(false);

  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null)

  const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getReviews = async () => {
          try {
            setIsError(false);
            setIsLoader(true);
            const data = await fetchReviewsById(movieId)
            setReviews(data)
          }
          catch {
            setIsError(true)
          }
          finally {
            setIsLoader(false);
          }
        }
        getReviews()
    }, [movieId])
  if (!reviews) {
    return <Loader />
  }
  return (
     <div>
         <ul >
        {isLoader && <Loader />}
        {isError && <p>Error 404</p>}
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>Автор: {review.author}</h3>
              <p>{review.content}</p>
            </li>
        ))}
              </ul>
        </div>
  )
}

export default MovieReviews
