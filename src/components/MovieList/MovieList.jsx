import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
 
  
  
  return  <div>
     
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <p>
               {movie.original_title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
};

export default MovieList;
