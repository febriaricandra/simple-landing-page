import React from 'react'

export default function Category() {
    return (
        <section className='my-0 mx-auto max-w-[1000px]'>
            <div className="flex justify-between mb-12 mx-[12px]">
                <h2 className='font-bold text-xl'>Category</h2>
                <a href="/" className='text-lg text-regal-blue font-medium hover:underline'>See all</a>
            </div>
            <div className="mx-auto my-12 flex justify-center flex-col sm:flex-row md:flex">
                <div className="p-12 my-2 mx-auto gap-1 sm:mx-2 md:mx-2 border-none rounded-xl bg-regal-blue w-3/5">
                    <h1 className='text-2xl font-bold text-white text-center'>Code</h1>
                </div>
                <div className="p-12 my-2 mx-auto gap-1 sm:mx-2 md:mx-2 border-none rounded-xl bg-regal-blue w-3/5">
                    <h1 className='text-2xl font-bold text-white text-center'>Design</h1>
                </div>
                <div className="p-12 my-2 mx-auto gap-1 sm:mx-2 md:mx-2 border-none rounded-xl bg-regal-blue w-3/5">
                    <h1 className='text-2xl font-bold text-white text-center'>Prototyping</h1>
                </div>
            </div>
        </section>
    )
}
