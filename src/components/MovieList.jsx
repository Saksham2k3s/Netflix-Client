import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title, movies}) {
  
  return (
    <div className='pt-3 md:pt-5 px-10 md:px-5 ' >
        <h1>{title}</h1>
        <div className=' mt-5 px-0 md:px-10' >
            <div className='flex items-center gap-5 overflow-scroll overflow-y-hidden no-scrollbar' >
                {
                   movies !== null &&  movies.map((movie) => {
                        return <div key={movie.id} className=' w-36 h-28 md:w-56 md:h-48'  ><MovieCard movie = {movie}  /></div>
                    })
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default MovieList