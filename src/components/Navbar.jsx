import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="h-20 w-full bg-black text-white flex justify-between items-center p-5 border-b sticky top-0 z-50">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-2xl font-black italic text-yellow-500 cursor-pointer">
          ⚡SportStore
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 font-bold text-sm">
          <li className='hover:text-yellow-500'><Link to="/">Home</Link></li>
          <li className='hover:text-yellow-500'><Link to="/shop">Shop</Link></li>
          <li className='hover:text-yellow-500'><Link to="/contact">Contact</Link></li>
          <li className='hover:text-yellow-500'><Link to="/about">About</Link></li>
        </ul>
        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(true)}>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50
        transform transition-transform duration-600 ease-in-out
        ${open ? '-translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)} className="text-2xl hover:scale-95 cursor-pointer hover:text-yellow-500">✕</button>
        </div>
        {/* Mobile Links */}
        <ul className="flex flex-col gap-6 font-bold text-lg px-6">
          <li className='hover:text-yellow-500' onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
          <li className='hover:text-yellow-500' onClick={() => setOpen(false)}><Link to="/shop">Shop</Link></li>
          <li className='hover:text-yellow-500' onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>
          <li className='hover:text-yellow-500' onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Navbar