import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
export default function HeroCarousel() {
  return (
    <div className='flex flex-row justify-center mx-9 my-40 blur-sm hover:blur-none'>
        <div className="">
            <h1 className='font-bold text-4xl'>Figma Course</h1>
            <p className='w-full sm:w-2/5 md:w-2/5 font-medium opacity-50 mt-1'>Figma is a vector graphics editor and Prototyping tool which is primarily web-based</p>
            <button className='flex flex-row items-center font-bold bg-gray-standar mt-4 p-2 rounded-lg'>Read <AiOutlineRight></AiOutlineRight></button>
        </div>
        <div className="div hidden sm:block md:block">
            <img src="/image/Figma-logo 2.png" alt="hero icons" />
        </div>
    </div>
  )
}
