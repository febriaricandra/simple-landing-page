import React from 'react'
import Card from './Card'

export default function RecentCard() {
    return (
        <section className='my-0 mx-auto max-w-[1000px]'>
            <div className="flex justify-between mb-12 mx-[12px]">
                <h2 className='font-bold text-xl'>Recent</h2>
                <a href="/" className='text-lg text-regal-blue font-medium hover:underline'>See all</a>
            </div>
            <div className="mx-12 flex flex-col sm:flex-row md:flex-row">
                <Card title='TypeScript 101' img='/image/Component 3.png' desc='TypeScript is a programming language developed and maintained by Microsoft.' />
                <Card title='Learn Phoenix' img='/image/Component 4.png' desc='Phoenix is a web development framework written in the functional programming language Elixir. ' />
                <Card title='Learn Ruby on Rails' img='/image/Component 5.png' desc='Ruby on Rails, or Rails, is a server-side web application framework written in Ruby.' />
            </div>
        </section>
    )
}
