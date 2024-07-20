import React, { useEffect } from 'react';
import Login from '../components/Login';
import FAQs from '../components/FAQs';
import { useTranslation } from 'react-i18next';
import '../index.css';

function Home() {
  const { t } = useTranslation(); // Specify the namespace

  useEffect(() => {
    const video1 = document.getElementById('feature-video-1');
    const video2 = document.getElementById('feature-video-2');

    if (video1) {
      video1.play().catch((error) => {
        console.log('Error attempting to play video 1:', error);
      });
    }

    if (video2) {
      video2.play().catch((error) => {
        console.log('Error attempting to play video 2:', error);
      });
    }
  }, []);

  return (
    <>
      <Login />
      
      <div className='w-full h-4 bg-[#232323]'></div>
      
      {/* Feature 1 */}
      <div className='bg-black flex flex-col px-5 py-10 md:py-12 lg:px-10 md:flex-row '>
        <div className='flex flex-col justify-center px-0 sm:px-20 flex-1 text-center md:text-left '>
          <h1 className='text-4xl lg:text-6xl text-white font-bold'>{t('home.Enjoy on your TV')}</h1>
          <p className=' text-white text-lg mt-5 md:text-xl lg:text-2xl'>
            {t('home.Feature1Description')}
          </p>
        </div>
        <div className='flex justify-center items-center flex-1 relative '>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV-image" className=' z-30' />

          <div className="absolute z-10 object-cover ">
            <video
              id="feature-video-1"
              autoPlay
              loop
              muted
              className="w-full"
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className='w-full h-4 bg-[#232323]'></div>
      
      {/* Feature 2 */}
      <div className='bg-black flex flex-col px-5 py-10 md:py-12 lg:px-10 md:flex-row '>
        <div className='flex flex-col justify-center items-center flex-1 order-2 lg:order-none  '>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Mobile-image" />
          <div className='h-24 w-1/2 bg-black rounded-md border-2 border-gray-200 flex flex-row px-3 py-3 relative -top-16 justify-between'>
           
            <div className='h-full flex flex-col items-center align-middle justify-center order-1 lg:order-1  '>
              <p className='text-white font-bold  '>{t('home.Stranger Things')}</p>
              <p className='text-blue-600 text-sm font-bold '>{t('home.Downloading...')}</p>
            </div>

            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='h-full w-16' alt="Downloading-img" />
            <div className="h-full flex items-center justify-center order-2 ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="downloading gif"
                className="h-10 w-10"
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center px-0 sm:px-20 flex-1 text-center md:text-left'>
          <h1 className='text-4xl lg:text-6xl text-white font-bold'>{t('home.Download your shows to watch offline')}</h1>
          <p className='text-white text-lg mt-5 md:text-xl lg:text-2xl'>
            {t('home.Feature2Description')}
          </p>
        </div>
      </div>
      <div className='w-full h-4 bg-[#232323]'></div>
      
      {/* Feature 3 */}
      <div className='bg-black flex flex-col px-5 py-10 md:py-12 lg:px-10 md:flex-row'>
        <div className='flex flex-col justify-center px-0 sm:px-20 flex-1 text-center md:text-left'>
          <h1 className='text-4xl lg:text-6xl text-white font-bold'>{t('home.Watch everywhere')}</h1>
          <p className='text-white text-lg mt-5 md:text-xl lg:text-2xl'>
            {t('home.Feature3Description')}
          </p>
        </div>
        <div className='flex justify-center items-center flex-1 relative '>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="Device-pile-image" className=' z-30' />
          <div className="absolute z-10 object-cover top-10  max-w-[62%] max-h-[80%]  ">
            <video
              id="feature-video-2"
              autoPlay
              loop
              muted
              className=" h-full w-full "
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className='w-full h-4 bg-[#232323]'></div>
      
      {/* Feature 4 */}
      <div className='bg-black flex flex-col px-5 py-10 md:py-12 lg:px-10 md:flex-row'>
        <div className='flex flex-col justify-center items-center flex-1 order-2 lg:order-none '>
          <img src="https://occ-0-2164-1009.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="Kids-profile-image" />

        </div>
        <div className='flex flex-col justify-center px-0 sm:px-20 flex-1 text-center md:text-left'>
          <h1 className='text-4xl lg:text-6xl text-white font-bold'>{t('home.Create profiles for kids')}</h1>
          <p className='text-white text-lg mt-5 md:text-xl lg:text-2xl'>
            {t('home.Feature4Description')}
          </p>
        </div>
      </div>
      <div className='w-full h-4 bg-[#232323]'></div>
      
      {/* FAQ Section */}
      <div className='bg-black flex px-10 py-20'>
        <div className='text-center items-center w-full'>
          <div className='text-center text-white text-2xl md:text-5xl font-bold'>
            {t('home.Frequently Asked Questions')}
          </div>
        </div>
      </div>
      <div className=''>
        <FAQs />
      </div>
    </>
  );
}

export default Home;
