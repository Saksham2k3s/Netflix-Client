import React, { useState } from 'react'
import { bannerURL, options } from '../utils/constant';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getPlayVideoKey, setMovieDescription, setMovieTitle } from '../redux/movieSlice'
import { ImCross } from "react-icons/im";
function MovieCard({movie}) {
  const {poster_path, id} = movie;
  const dispatch = useDispatch();
  const movieKey = useSelector((state) => state.movie.playVideoKey);
  const toggle = useSelector((state) => state.movie.toggle);
  const [playVideo, setPlayVideo] = useState(false)
  const handleVideoPlay = async (movie_id) => {
    setPlayVideo(true)
    console.log("This is movie",movie);
    const { title, overview } = movie;

    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options);
      console.log(res?.data);
      dispatch(setMovieTitle(title));
      dispatch(setMovieDescription(overview));
      dispatch(getPlayVideoKey(res?.data?.results[0]?.key))
    } catch (error) {
      console.log("Error in getting the video", error);
    }
  }
  return (
    <>
    {
      <div className='w-48 cursor-pointer ' onClick={() => handleVideoPlay(id)}  >
      <img src={`${bannerURL}/${poster_path}`} className=' w-full' alt="" />
  </div>
    }

    {/* Video Modal */}
    {
      playVideo && toggle && <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 px-3 md:px-0  ">
      <div className="relative z-50 bg-black rounded-md border border-gray-300 overflow-hidden w-full md:w-1/2 h-1/2">
        <div className="absolute top-0 right-0 p-2">
          <ImCross onClick={() => setPlayVideo(!playVideo)}  className="text-white cursor-pointer" />
        </div>
        <iframe
          className="w-full h-full aspect-w-16 aspect-h-9"
          src={`https://www.youtube.com/embed/${movieKey}?si=y4kSvgDwVvEkrMlO`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    }
    </>
  )
}

export default MovieCard