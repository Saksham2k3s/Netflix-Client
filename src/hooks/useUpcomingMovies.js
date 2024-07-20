import axios from "axios";
import { options, upcomingMoviesAPI } from "../utils/constant";
import {  getUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";


const useUpcomingMovies = async () => {

  const dispatch = useDispatch();
    try {
      const res = await axios.get(upcomingMoviesAPI, options);
       dispatch(getUpcomingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  export default useUpcomingMovies;