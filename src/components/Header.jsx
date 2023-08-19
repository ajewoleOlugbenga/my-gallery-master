import React from 'react';
import ProfilePhoto from '../images/profilePhoto.png';

const Header = () => {
  return (
   <header>
    <section>
        <div className='flex flex-col items-center justify-center'>
            <img src={ProfilePhoto} 
            alt='ProfilePhoto'
            className='w-[101.76px] h-[101.76px] rounded-lg  '
            />
            <h1 className='font-Montserrat font-bold text-xl'>Rodney Cotton</h1>
            <p className='font-Montserrat  '>Helsinki, Finland</p>
        </div>
    </section>
   </header>
  )
}

export default Header
