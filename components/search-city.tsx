import Image from 'next/image'
import React from 'react'

const SearchCity = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt=[calc(155px-43px)]'>
      <h1 className='w-[731px] h-[62px] text-[52px] text-center'>How`s the sky looking today?</h1>
      <form action="" className='w-full flex  items-center justify-center gap-[16px]'>
        <div className='relative '>
      <input type="text" name='search' placeholder="Search for a place..." className=' w-[526px] h-[58px] bg-Neutral_800 pl-[60px] rounded-[12px] text-[20px]' />
      <Image src='/images/icon-search.svg' alt='search' width={20} height={20} className='absolute left-[24px] top-1/2 transform -translate-y-1/2 '/>
      </div>
      <button className='w-full max-w-[114px] h-[56px] bg-Blue_500 rounded-[12px] cursor-pointer hover:bg-Neutral_0 hover:text-Neutral_900 text-[20px] transition-colors delay-150 duration-300 ease-in-out '>Search</button>
      </form>
    </div>
  )
}

export default SearchCity