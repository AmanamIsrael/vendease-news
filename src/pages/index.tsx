import React from 'react'
import Tabs from '../components/Tabs'

const Home = () => {
  return (
    <main>
      <section className='w-screen h-screen pt-[32px]'>
        <p className='leading-44.78 text-4xl text-green mb-[32px] capitalise text-center'>News Feed</p>
        <div className='grid gap-[32px] justify-items-center w-[350px] mx-auto'>
          <Tabs />
        </div>
      </section>
    </main>
  )
}

export default Home