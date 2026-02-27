import React from 'react'

const Navbar = () => {
  return (
   <>
    <nav className='h-20 w-full bg-black text-white flex justify-between items-center p-5 border-b sticky top-0 z-50'>
        <div className="logo">
            <h2 className='text-2xl font-black italic text-yellow-500'>⚡SportStore</h2>
        </div>
        <ul className='flex gap-9 font-bold text-sm'>
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
   </> 
  )
}

export default Navbar
