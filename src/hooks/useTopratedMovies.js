import axios from "axios";
import { options, topRatedMoviesAPI } from "../utils/constant";
import { getTopratedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";


const useTopratedMovies = async () => {

  const dispatch = useDispatch();
    try {
      const res = await axios.get(topRatedMoviesAPI, options);
       dispatch(getTopratedMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  export default useTopratedMovies;