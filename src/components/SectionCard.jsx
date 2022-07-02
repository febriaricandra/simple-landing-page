import React from 'react'
import Card from './Card'

export default function SectionCard() {
  return (
    <section className='my-0 mx-auto max-w-[1000px]'>
      <div className="flex justify-between mb-12 mx-[12px]">
        <h2 className='font-bold text-xl'>Top</h2>
        <a href="/" className='text-lg text-regal-blue font-medium hover:underline'>See all</a>
      </div>
      <div className="mx-12 flex flex-col sm:flex-row md:flex-row">
        <Card img="/image/Component 2.png" desc="Next.js is an open-source development framework built on top of Node.js." title="Next.js Introduction" />
        <Card img="/image/Component 1.png" desc="Remix is a new framework that blurs the line between server and client." title="Remix Introduction" />
      </div>
    </section>
  )
}
