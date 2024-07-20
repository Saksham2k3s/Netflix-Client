import React from 'react';
import { CiPlay1, CiCircleInfo, CiPause1 } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { setIsPlaying } from '../redux/movieSlice';

function VideoTitle({ title, overview }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(state => state.movie.isPlaying);
  
  const handleVideoPlay = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + 500, // Change 500 to the amount you want to scroll down
      behavior: 'smooth'
    });
  };

  return (
    <div className='w-full absolute text-white pt-[38%] md:pt-[18%] p-12'>
      <div className='order-2 lg:order-1'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='mt-3'>{overview}</p>
      </div>
      <div className='flex flex-row mt-5 gap-5 order-1 lg:order-2'>
        <button 
          className='flex px-6 py-2 bg-white items-center text-black rounded-md'
          onClick={handleVideoPlay}
        > 
          {isPlaying ? <><CiPause1 size={'24px'} /> Pause</> : <><CiPlay1 size={'24px'} /> Play</>}
        </button>
        <button 
          className='flex px-6 py-2 items-center text-black bg-gray-500 bg-opacity-50 rounded-md'
          onClick={handleScroll}
        > 
          <CiCircleInfo size={'24px'} /> Watch more
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
