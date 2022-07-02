import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between max-w-[1000px] mx-auto my-6'>
        <h4 className='font-medium opacity-75'>learn to</h4>
        <div className="flex">
            <h4 className='font-medium opacity-75 pl-4'>Cookies</h4>
            <h4 className='font-medium opacity-75 pl-4'>Terms of Service</h4>
            <h4 className='font-medium opacity-75 pl-4'>Privacy Policy</h4>
        </div>
    </div>
  )
}
