'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
interface SearchProps {
  query: string
}

const SearchCity = ({ query }: SearchProps) => {
  const [value, setValue] = React.useState('')
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/?${params.toString()}`)
      setValue('')
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }

  return (
    <main className='flex flex-col items-center justify-center gap-4 mt=[calc(155px-43px)]'>
      <h1 className='w-[731px] h-[62px] text-[52px] text-center'>
        How`s the sky looking today?
      </h1>
      <div className='w-full flex  items-center justify-center gap-[16px]'>
        <div className='relative '>
          <input
            type='search'
            name='name'
            placeholder='Search for a place...'
            className=' w-[526px] h-[58px] bg-Neutral_800 pl-[60px] pr-[20px] rounded-[12px] text-[20px]'
            onChange={(e) => setValue(e.target.value)}
            defaultValue={searchParams.get(query)?.toString()}
          />
          <Image
            src='/images/icon-search.svg'
            alt='search'
            width={20}
            height={20}
            className='absolute left-[24px] top-1/2 transform -translate-y-1/2 '
          />
        </div>
        <button
          className='w-full max-w-[114px] h-[56px] bg-Blue_500 rounded-[12px] cursor-pointer hover:bg-Neutral_0 hover:text-Neutral_900 text-[20px] transition-colors delay-150 duration-300 ease-in-out '
          onClick={() => handleSearch(value)}
        >
          Search
        </button>
      </div>
    </main>
  )
}

export default SearchCity
