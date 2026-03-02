import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

const PRODUCTS = [
  // FOOTBALL
  { id: 1, name: 'Pro Football Boots', price: 220, category: 'Football', img: 'https://images.unsplash.com/photo-1571267434388-6a1df2649dce?w=900&auto=format&fit=crop&q=60', },
  { id: 2, name: 'Match Football', price: 45, category: 'Football', img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6', },
  { id: 3, name: 'Goalkeeper Gloves', price: 60, category: 'Football', img: 'https://images.unsplash.com/photo-1760177379284-b68471fdd217?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29hbGtlZXBlciUyMGdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D', },
  { id: 4, name: 'Football Shin Guards', price: 30, category: 'Football', img: 'https://i.pinimg.com/736x/28/94/ac/2894ac0fcc27f949d780d91470c4cda6.jpg', },

  // BASKETBALL
  { id: 5, name: 'Elite Basketball Shoes', price: 190, category: 'Basketball', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', },
  { id: 6, name: 'Indoor Basketball', price: 40, category: 'Basketball', img: 'https://images.unsplash.com/photo-1519861531473-9200262188bf', },
  { id: 7, name: 'Basketball Jersey', price: 55, category: 'Basketball', img: 'https://i.pinimg.com/1200x/7a/b2/10/7ab210b7a76163ad62476b15e6828eb2.jpg', },
  { id: 8, name: 'Basketball Wrist Band', price: 18, category: 'Basketball', img: 'https://i.pinimg.com/1200x/b9/46/b7/b946b7f4fffab5fe50fba5b33f6c19bb.jpg', },

  // VOLLEYBALL
  { id: 9, name: 'Professional Volleyball', price: 35, category: 'Volleyball', img: 'https://i.pinimg.com/1200x/65/77/f7/6577f7770fe4ea1d8ea2c889c9b8b98e.jpg', },
  { id: 10, name: 'Volleyball Knee Pads', price: 28, category: 'Volleyball', img: 'https://i.pinimg.com/736x/fc/bb/74/fcbb7464fb01835973c0b7d48213159e.jpg', },
  { id: 11, name: 'Volleyball Net', price: 75, category: 'Volleyball', img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1', },
  { id: 12, name: 'Volleyball Shoes', price: 140, category: 'Volleyball', img: 'https://i.pinimg.com/1200x/19/57/1d/19571d10f8d9b395c1fb00dedebfe3bb.jpg', },

  // BADMINTON
  { id: 13, name: 'Badminton Racket Pro', price: 120, category: 'Badminton', img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6', },
  { id: 14, name: 'Feather Shuttlecock Pack', price: 25, category: 'Badminton', img: 'https://i.pinimg.com/736x/61/59/e5/6159e575581c43edc597cb1e669b7dc3.jpg', },
  { id: 15, name: 'Badminton Grip Tape', price: 12, category: 'Badminton', img: 'https://i.pinimg.com/1200x/97/5d/ed/975dedfc578b8903e05d6569db10371a.jpg', },
  { id: 16, name: 'Badminton Kit Bag', price: 85, category: 'Badminton', img: 'https://i.pinimg.com/1200x/3b/7b/d8/3b7bd86e82ff5809103ff62cee8fbe2d.jpg', },

  // CRICKET
  { id: 17, name: 'English Willow Cricket Bat', price: 260, category: 'Cricket', img: 'https://images.unsplash.com/photo-1593766788306-28561086694e', },
  { id: 18, name: 'Cricket Leather Ball', price: 22, category: 'Cricket', img: 'https://plus.unsplash.com/premium_photo-1677261483398-b792bce89897?w=900&auto=format&fit=crop&q=60', },
  { id: 19, name: 'Cricket Batting Gloves', price: 75, category: 'Cricket', img: 'https://i.pinimg.com/736x/ae/30/48/ae304847bc4ef25954d55a4380153a4b.jpg', },
  { id: 20, name: 'Cricket Helmet', price: 140, category: 'Cricket', img: 'https://i.pinimg.com/736x/90/d4/4b/90d44b5062e5cf1bbccc45c810bafc65.jpg', },

  // TENNIS
  { id: 21, name: 'Tennis Racket Control', price: 180, category: 'Tennis', img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6', },
  { id: 22, name: 'Pressurized Tennis Balls', price: 20, category: 'Tennis', img: 'https://images.unsplash.com/photo-1538512035249-a07f22cb1a91', },
  { id: 23, name: 'Tennis Grip Tape', price: 15, category: 'Tennis', img: 'https://images.unsplash.com/photo-1569597773059-6d747e5f8ed5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVubmlzJTIwR3JpcCUyMFRhcGV8ZW58MHx8MHx8fDA%3D', },
  { id: 24, name: 'Tennis Shoes', price: 160, category: 'Tennis', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', },
];
const CATEGORIES = ['All','Football','Basketball','Volleyball','Badminton','Cricket','Tennis',]
const Shop = () => {
  const { addToCart } = useCart()
  const [searchParams] = useSearchParams()
  const categoryFromURL = searchParams.get('category') || 'All'
  useEffect(() => {
    setSelectedCategory(categoryFromURL)
  }, [categoryFromURL])

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL)
  const [search, setSearch] = useState('')
  const filteredProducts = PRODUCTS.filter((e) => {
    const matchCategory = selectedCategory === 'All' || selectedCategory === e.category
    const matchSearch = e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    return matchCategory && matchSearch
  })
  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center gap-2 pt-16 pb-10 px-4 border-b border-gray-400/70 bg-black">
        <h2 className="text-yellow-500 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-center">
          Our Store
        </h2>
        <p className="text-gray-400 text-center max-w-xl">
          Browse our complete collection of premium sports equipment
        </p>
      </div>

      {/* Category-Section */}
        <div className="flex flex-wrap gap-2 py-6 px-8">
          <h2 className='w-full text-2xl font-bold'>Choose by Category</h2>
          {CATEGORIES.map((e) => 
            <div
             onClick={() => setSelectedCategory(e)}
             className={`cursor-pointer px-6 py-2 rounded-2xl border transition
              ${
                selectedCategory === e
                  ? 'bg-yellow-500 border-yellow-500'
                  : 'bg-yellow-300/50 border-yellow-300'
              }`}>
             {e}
            </div>)}
        </div>
        {/* Search Bar */}
        <div className="px-6 flex justify-end">
          <input type="search" placeholder='Search here....'
          onChange={(e) => (setSearch(e.target.value))} value={search}
          className='w-full md:w-80 p-3 border-2 rounded-full focus:outline-yellow-400'/>
        </div>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-10 py-10 place-items-center">
        {filteredProducts.map((e) => (
          <div
            key={e.id}
            className="group relative w-full max-w-[250px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-yellow-100 hover:border-yellow-400"
          >
            <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
              <img
                src={e.img}
                alt={e.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                ${e.price}
              </span>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                {e.name}
              </h3>

              <p className="text-xs text-gray-500 uppercase tracking-wide">
                {e.category}
              </p>
              <div className="flex gap-2 pt-2">
                <button
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-2 rounded-xl transition"
                  onClick={() => addToCart(e)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop
