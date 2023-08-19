import React from 'react'

const Followers = () => {
  return (
    <section>
        <div className='flex items-center justify-center gap-4'>
            <div className='w-[78px] h-[52px] bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                <h1 className='font-bold text-xl leading-none '>100</h1>
                <p className='leading-none'>Posts</p>
            </div>
            <div className='w-[78px] h-[52px] bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                 <h1 className='font-bold text-xl leading-none '>2,242</h1>
             <p className='leading-none'>Followers</p>
             </div>
             <div className='w-[78px] h-[52px] bg-gray-200 flex flex-col items-center justify-center rounded-lg'>
                <h1 className='font-bold text-xl leading-none '>1,432</h1>
                <p className='leading-none'>Following</p>
             </div>
        </div>
    </section>
  )
}

export default Followers
