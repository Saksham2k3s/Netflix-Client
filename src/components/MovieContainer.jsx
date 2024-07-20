import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function MovieContainer() {
  const { t } = useTranslation();
  const movie = useSelector((store) => store.movie);
  const { nowPlayingMovies, popularMovies, topratedMovies, upcomingMovies } = movie;

  return (
    <div className='bg-black text-white pb-10'>
      <div className='pt-20 md:pt-0 '>
       
        <MovieList title={t('movie-list.Now Playing')} movies={nowPlayingMovies} />
        <MovieList title={t('movie-list.Popular Movies')} movies={popularMovies} />
        <MovieList title={t('movie-list.Top Rated Movies')} movies={topratedMovies} />
        <MovieList title={t('movie-list.Upcoming Movies')} movies={upcomingMovies} />
      </div>
    </div>
  );
}

export default MovieContainer;
