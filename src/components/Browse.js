import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';

import useNowPlayingMovie from '../hooks/usePlayingMovie';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import SearchMovies from './SearchMovies';
function Browse() {
  const user = useSelector((state) => state.user.user);
  const toggle = useSelector((state ) => state.movie.toggle)
  const navigate = useNavigate();

  useNowPlayingMovie();
  usePopularMovies();
  useUpcomingMovies();
  useTopratedMovies();

  useEffect(() => {
    if(!user){
      navigate('/');


     }
  }, [])
  
  return (
   <div className='' >
    <div>
      <Header/>
    </div>
     {
      toggle ? (
        <>
        <SearchMovies/>
        </>
      ) : (<>
        <div>
    <MainContainer/>
    </div>
    <MovieContainer/>
      </>)
     }
   </div>

  )
}

export default Browse