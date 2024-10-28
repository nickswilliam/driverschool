import React from 'react'
import { Skeleton } from '../ui/skeleton'

const arrayList = [1,2,3,4]
const arrayUl = [1,2,3,4,5,6,7,8]

export const LoadingFetchCoursePrices = () => {
  return (
    <div className="self-center mt-6 w-full max-w-7xl px-10 pt-10 pb-16 flex justify-center flex-wrap gap-4">
    {arrayList.map((item)=>(
        <div
        className="flex flex-col max-w-[370px] items-center justify-between px-6 py-6 gap-2 border border-pink-500 shadow-lg rounded-md bg-violet-100 hover:shadow-pink-500 duration-200 hover:shadow-xl"
        key={item}
      >
        <Skeleton className='bg-gray-300/70 w-52 h-[18px]'/>
        <Skeleton className='mt-8 bg-gray-300/70 w-60 h-14 border-b border-pink-400 mb-4 px-4'/>

        <ul className='text-pink-500/90 text-center flex flex-col gap-1 items-center list-disc px-4'>
            {arrayUl.map((item)=>(
                <Skeleton key={item} className='bg-gray-300/70 h-4 w-52'/>
            ))}
        </ul>

        <Skeleton  className="w-full text-2xl px-6 py-2 h-10 mt-6 border-2 rounded-sm border-pink-500 bg-gray-300/70"/>
      </div>
    ))}
  </div>
  )
}
