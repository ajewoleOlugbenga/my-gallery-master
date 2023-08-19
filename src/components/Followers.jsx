import React from 'react'

const Followers = () => {
  return (
    <section>
        <div className='flex items-center justify-center gap-8 mt-4'>
            <div className='w-[78px] h-[52px] bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                <h1 className='font-bold text-xl leading-none opacity-70'>100</h1>
                <p className='leading-none opacity-50'>Posts</p>
            </div>
            <div className='w-[78px] h-[52px] bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                 <h1 className='font-bold text-xl leading-none opacity-70 '>2,242</h1>
             <p className='leading-none opacity-50'>Followers</p>
             </div>
             <div className='w-[78px] h-[52px] bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                <h1 className='font-bold text-xl leading-none opacity-70'>1,432</h1>
                <p className='leading-none opacity-50'>Following</p>
             </div>
        </div>
    </section>
  )
}

export default Followers
