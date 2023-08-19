import React from 'react';
import photo4 from '../images/photo_4.png';
import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo5 from '../images/photo5.png';
import photo6 from '../images/photo6.png';

const ImageCard = () => {
  return (
    <main>
        <section className='container w-96 md:w-[1000px]  h-auto grid mx-auto justify-center ml-1 mt-12 overflow-hidden md:mx-auto'>
            <div className='grid grid-cols-3 gap-4 mx-auto'>
                <span >
                    <img src={photo1} alt="galleryPhoto" 
                    className='w-[109.32px] h-[109.52px] rounded-lg shadow-md md:w-[299px] md:h-[299px] '
                    />
                </span>
                <span className='grid col-span-2'>
                    <img src={photo2} alt="galleryPhoto" 
                    className='w-[229.98px] h-[109.52px] rounded-lg shadow-md md:w-[629px] md:h-[299px] '
                    />
                </span>
                <span className='grid col-span-2'>
                    <img src={photo3} alt="galleryPhoto" 
                    className='w-[229.25px] h-[109.52px] rounded-lg shadow-md md:w-[627px] md:h-[299px] '
                    />
                </span>
                <span className='grid row-span-2'>
                    <img src={photo4} alt="galleryPhoto" 
                    className='w-[108.59px]  h-[230.76px] rounded-lg shadow-md md:w-[297px] md:h-[630px] '
                    />
                </span>
                <span>
                    <img src={photo5} alt="galleryPhoto" 
                    className='w-[109.32px] h-[109.52px] rounded-lg shadow-md md:w-[299px] md:h-[299px] '
                    />
                </span>
                <span>
                    <img src={photo6} alt="galleryPhoto" 
                    className='w-[109.32px] h-[109.52px] rounded-lg shadow-md md:w-[299px] md:h-[299px] '
                    />
                </span>
            </div>
        </section>
    </main>
  )
}

export default ImageCard
