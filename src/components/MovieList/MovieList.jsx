import React, { useEffect, useState } from "react";
import { fetchMoviesDay } from "../../services/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMoviesDay = async () => {
      const data = await fetchMoviesDay();
      setMovies(data);
    };
    getMoviesDay();
    console.log(data);
  }, []);
  return <div></div>;
};

export default MovieList;
