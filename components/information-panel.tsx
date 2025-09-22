import Image from 'next/image'
import React from 'react'

const InformationPanel = () => {
  return (
    <div className='w-full grid grid-cols-2 '>
      <div className='w-[800px] flex flex-col gap-4'>
    <div className='relative w-full max-w-[800px] h-[286px] '>
      <Image
        src='/images/bg-today-large.svg'
        alt='bg'
        fill
        sizes='(min-width: 800px) 50vw, 100vw'
        className='object-cover '
      />
      <div className='absolute left-[24px] top-[109px] '>
        <div className='w-full max-w[460px] h-[68px] flex flex-col items-start gap-[12px]'>
          <h1 className='text-[28px] font-semibold '>Berlin, Germany</h1>
          <p className='text-[18px]'>Tuesday, Aug 5, 2025</p>
        </div>
      </div>
      <div className='absolute right-[24px] top-[83px] '>
        <div className='w-full max-w[292px] h-[120px] flex  items-center justify-end gap-[20px]'>
          <Image src='/images/icon-sunny.webp' alt='sunny' width={120} height={120}/>
          <h1 className='text-[96px] font-semibold '>68°</h1>
          
        </div>
      </div>
    </div>
    <div className='w-full max-w-[800px] h-[118px]  flex items-center justify-around '>
       <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
        <p>Feels Like</p>
        <h2>64°</h2>
       </div>
       <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
        <p>Feels Like</p>
        <h2>64°</h2>
       </div>
       <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
        <p>Feels Like</p>
        <h2>64°</h2>
       </div>
       <div className='w-[182px] h-[118px] bg-Neutral_800 rounded-[12px] p-[20px] gap-[24px] flex flex-col '>
        <p>Feels Like</p>
        <h2>64°</h2>
       </div>
    </div>
    </div>
    </div>
  )
}

export default InformationPanel
