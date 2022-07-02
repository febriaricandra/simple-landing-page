import React from 'react'
import {FiSearch} from 'react-icons/fi'

export default function Navbar() {
  return (
    <header className='flex flex-row justify-around my-4 items-center'>
        <div className="logo flex flex-row">
            <img src="/image/Union.png" alt="logo item" />
            <span className='mx-4 font-bold'>LearningHub</span>
        </div>
        <div className="nav-list hidden sm:block md:block">
            <ul>
                <li>
                    <a className='mx-2 font-medium' href="#">Code</a>
                    <a className='mx-2 font-medium' href="#">Design</a>
                    <a className='mx-2 font-medium' href="#">Prototyping</a>
                </li>
            </ul>
        </div>
        <div className="search-icon">
            <FiSearch />
        </div>
    </header>
  )
}
