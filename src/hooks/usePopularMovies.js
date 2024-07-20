import axios from "axios";
import { options, popularMoviesAPI } from "../utils/constant";
import {  getPolularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";


const usePopularMovies = async () => {

  const dispatch = useDispatch();
    try {
      const res = await axios.get(popularMoviesAPI, options);
       dispatch(getPolularMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  export default usePopularMovies;