import axios from "axios";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODdmODkzMDg1ZDYwODA3Mzk1ZDYxNGQ0YzAwNGE5NSIsIm5iZiI6MTcyODcyMDQ0OS44MDk4MDMsInN1YiI6IjY3MGEyODYxYmJiMWE5ZTgxYzYxNjQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fs5jv4vQFHcAHgKAIIH_t-DZTeExLxKcFgi4ddGxL14",
  },
};

export const fetchMoviesDay = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  console.log(data);
  
  return data;
};