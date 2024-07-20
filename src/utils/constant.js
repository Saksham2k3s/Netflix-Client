export const USER_API_ENDPOINT =
  "https://netflix-backend-esdh.onrender.com/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTViNDhhYTUzZWRkMjA2ZDdiNzNhYTc0YjVkOTU4NyIsInN1YiI6IjY2MmNmYmQ0NWE3ODg0MDEyYWMxNWI4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rg84yzExs5aDxRyweriNeMl11UFp9FxgswETCIf2ILc",
  },
};

export const nowPlayingMovieAPI =
  "https://api.themoviedb.org/3/movie/now_playing";
export const popularMoviesAPI = "https://api.themoviedb.org/3/movie/popular";
export const topRatedMoviesAPI = "https://api.themoviedb.org/3/movie/top_rated";
export const upcomingMoviesAPI = "https://api.themoviedb.org/3/movie/upcoming";
export const bannerURL = "https://image.tmdb.org/t/p/w500";
export const searchMovieAPI = "https://api.themoviedb.org/3/search/movie";
