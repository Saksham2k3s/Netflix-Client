import axios from 'axios';
import React, { useState } from 'react'
import { options, searchMovieAPI } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMovies } from '../redux/movieSlice';
import SearchedMovies from './SearchedMovies';
import { IoMdSearch } from "react-icons/io";


function SearchMovies() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('')
  const searchedMovies = useSelector((state) => state.movie.searchedMovies);
  console.log("These are seached movies", searchedMovies);
  const dispatch = useDispatch();
  const handleSearch = async(e) => {
   e.preventDefault();
   try {
    setLoading(true)
    const res = await axios.get(`${searchMovieAPI}?query=${input}`, options);
    dispatch(getSearchedMovies(res?.data?.results));
    setTitle(input)
    setInput('')
   } catch (error) {
     console.log(error);
   } finally {
     setLoading(false)
   }
  }
  return (
    <>
  <div className='max-w-screen min-h-screen bg-black flex flex-col items-center  pt-20'>
      <form action="" onSubmit={handleSearch} className="w-full flex justify-center">
        <div className='w-1/2 flex justify-between border border-gray-300 rounded-md px-5 py-2 md:py-3'>
          <input
            type="text"
            placeholder='Search Movies...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='border-none outline-none bg-transparent text-white font-bold w-full mr-4'
          />
          <button className='bg-red-600 text-white px-4 py-2 font-bold hidden md:block '>
            {loading ? 'Loading...' : 'Search'}
          </button>
          <button className='bg-transparent text-red-600 text-3xl px-4 py-2 font-bold block md:hidden '>
            <IoMdSearch/>
          </button>
        </div>
      </form>
      <div className='bg-black flex flex-col md:flex-col items-center justify-center w-full mt-10'>
        {searchedMovies && <SearchedMovies title={title} movies={searchedMovies} />}
      </div>
    </div>
    
    </>
  )
}

export default SearchMovies