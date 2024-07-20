import React, { useEffect } from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector, useDispatch } from "react-redux";
import { options } from "../utils/constant";
import toast from "react-hot-toast";
import axios from "axios";
import { getPlayVideoKey } from "../redux/movieSlice";
function VideoBackground({ movieId }) {
  const dispatch = useDispatch()
  const playVideoKey = useSelector((state) => state.movie.playVideoKey);
  const isPlaying = useSelector((state) => state.movie.isPlaying);
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlayingMovies);
  useMovieById(movieId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (playVideoKey === null) {
          const playMovie = nowPlayingMovies[2]; // Adjust this index as per your requirement
          const { id } = playMovie;
          console.log("This is movie id", playMovie);
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos`,
            options
          );
           console.log(res);
          dispatch(getPlayVideoKey(res?.data?.results[0]?.key));
        }
      } catch (error) {
        console.log("Error in playing the video");
        toast.error("Error fetching video", error.message);
      }
    };

    fetchData();
  }, [dispatch, nowPlayingMovies, playVideoKey]);

  useEffect(() => {
    const iframe = document.getElementById("youtube-iframe");

    if (iframe) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: isPlaying ? "playVideo" : "pauseVideo",
        }),
        "*"
      );
    }
  }, [isPlaying]);

  

  return (
    <div className="w-max-screen max-h-screen">
      <iframe
        id="youtube-iframe"
        className="w-full aspect-video"
        width="300"
        height="auto"
        src={`https://www.youtube.com/embed/${playVideoKey || ""}?enablejsapi=1&controls=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
