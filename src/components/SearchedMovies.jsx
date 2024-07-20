import React from 'react'
import MovieCard from './MovieCard'


function SearchedMovies({title, movies}) {

  return (
    <>
    <div className=' w-full  text-white p-10 text-center md:text-start ' >
        <h1>{title}</h1>
    </div>
    <div className='flex flex-wrap flex-col md:flex-row px-0 md:px-10' >
      {
        movies.map((movie) => {
            return <div className='px-3 py-2 '><MovieCard movie={movie} /></div>
        })
      }
    </div>
    </>
  )
}

export default SearchedMovies;