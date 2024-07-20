import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topratedMovies: null,
    upcomingMovies: null,
    searchedMovies: null,
    playVideoKey: null,
    toggle: false,
    searchingMovie: false,
    trailer: "",
    movieTitle: "",
    movieDescription: "",
    isPlaying: false,
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPolularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    getSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getTrailerMovie: (state, action) => {
      state.trailer = action.payload;
    },
    getPlayVideoKey: (state, action) => {
      state.playVideoKey = action.payload;
    },
    setSearchingMovies: (state, action) => {
      state.searchingMovie = !action.payload;
    },
    setMovieTitle: (state, action) => {
      state.movieTitle = action.payload;
    },
    setMovieDescription: (state, action) => {
      state.movieDescription = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPolularMovies,
  getTopratedMovies,
  getUpcomingMovies,
  setToggle,
  getTrailerMovie,
  getSearchedMovies,
  getPlayVideoKey,
  setMovieDescription,
  setMovieTitle,
  setIsPlaying,
} = movieSlice.actions;
export default movieSlice.reducer;
