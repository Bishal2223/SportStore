import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link
    to={'/shop'}
     className=" bg-white text-yellow-500 font-black px-6 py-3 rounded-full cursor-pointer hover:scale-95 transition text-lg sm:text-xl">
      SHOP NOW
    </Link>
  )
}

export default Button
