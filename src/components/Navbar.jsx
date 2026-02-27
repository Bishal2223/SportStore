import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <nav className='h-20 w-full bg-black text-white flex justify-between items-center p-5 border-b sticky top-0 z-50'>
        <div className="logo">
            <Link to={'/'} className='text-2xl font-black italic text-yellow-500 cursor-pointer'>⚡SportStore</Link>
        </div>
        <ul className='flex gap-9 font-bold text-sm'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About </Link></li>
        </ul>
    </nav>
   </> 
  )
}

export default Navbar
