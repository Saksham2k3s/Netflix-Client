import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
  const movie = useSelector(store => store.movie);
  const { nowPlayingMovies, movieDescription, movieTitle } = movie;

  
  if(!nowPlayingMovies) return


  const { overview, title, id } = nowPlayingMovies[2]
  const movie_Title = movieTitle === '' ? title : movieTitle;
  const movie_Description = movieDescription === '' ? overview : movieDescription
  return (
    <div>
        <div className=' order-2 md:order-1' >
        <VideoTitle  title = {movie_Title} overview = {movie_Description} />
        </div>
        <div className='order-1 md:order-2' >
        <VideoBackground movieId = {id} />
        </div>
    </div>
  )
}

export default MainContainer