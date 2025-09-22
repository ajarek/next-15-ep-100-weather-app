import React from 'react'

const SearchCity = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt=[calc(155px-43px)]'>
      <h1 className='w-full max-w-[731px] h-[62px] text-[52px]'>How`s the sky looking today?</h1>
      <form action="" className='w-full flex  items-center justify-center gap-[16px]'>
      <input type="text" name='search' placeholder="Search for a place..." className='w-full max-w-[526px] h-[58px] bg-Neutral_800 px-[24px] rounded-[12px]' />
      <button className='w-full max-w-[114px] h-[56px] bg-Blue_500 rounded-[12px] cursor-pointer hover:bg-Neutral_0 hover:text-Neutral_900 text-[20px] transition-colors delay-150 duration-300 ease-in-out '>Search</button>
      </form>
    </div>
  )
}

export default SearchCity