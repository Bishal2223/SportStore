import React from 'react'

const Home = () => {
  return (
    <section className='relative flex items-center justify-center text-center h-[90vh] overflow-hidden'>
      <div 
      className="h-full w-full bg-cover absolute top-0 left-0
      bg-[url('https://i.pinimg.com/1200x/2f/7a/6a/2f7a6aa138c47d4c47f6c8d1a79094d5.jpg')]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/70"></div>
      <div className="relative z-10 w-2xl px-6 py-5">
        <span className=" px-3 py-1 mb-4 text-sm font-semibold tracking-wide text-yellow-500 uppercase bg-yellow-500/10 rounded-full border border-yellow-500/20">
            New Season Collection
          </span>
          <h1 className="text-8xl font-black text-white mb-4 leading-tight italic uppercase tracking-tighter">
            Elevate <br/>
            <span className="text-yellow-500">Your Game</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Discover premium sports equipment and apparel from the world's leading brands.
            <span> Your perfect gear awaits at unbeatable prices.</span>
          </p>
          <button className='bg-yellow-500 text-white px-6 py-3 rounded-full font-medium cursor-pointer hover:scale-95'>
            SHOP NOW
          </button>
      </div>
    </section>
  )
}

export default Home
