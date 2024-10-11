import axios from "axios";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjYzMmM5ODZmNmNlYTY5NGY4OTBmMWE5NTE3NjhhZSIsIm5iZiI6MTcyODQ1ODI3OC4zMTM4OTIsInN1YiI6IjY3MDYxZGM4NDQyNjVjNDM1OTc4MTkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TRnXQCVQEdgdd5DQ7z6e3MZqohlOPHFvl8jsRYDdsVc",
  },
};

export const fetchMoviesDay = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=3f632c986f6cea694f890f1a951768ae",
    options
  );
  return data.results;
};
