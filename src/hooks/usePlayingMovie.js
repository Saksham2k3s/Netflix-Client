import axios from "axios";
import { nowPlayingMovieAPI, options } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";


const useNowPlayingMovie = async () => {
  const dispatch = useDispatch();
    try {
      const res = await axios.get(nowPlayingMovieAPI, options);
       dispatch(getNowPlayingMovies(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  export default useNowPlayingMovie;