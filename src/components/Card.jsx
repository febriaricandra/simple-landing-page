import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

export default function Card({ img, title, desc }) {
    return (
        <div className='m-4 border-none hover:drop-shadow-lg rounded-lg bg-white'>
            <div className="img-fluid">
                <img width='600px' className='rounded-t-lg' src={img} alt="desc" />
            </div>
            <div className='p-6'>
                <h1 className='font-bold'>{title}</h1>
                <p className='font-medium text-sm opacity-75'>{desc}</p>
                <button className='flex flex-row items-center font-medium bg-regal-blue text-white mt-4 p-2 rounded-lg'>Read <AiOutlineRight></AiOutlineRight></button>
            </div>
        </div>
    )
}
