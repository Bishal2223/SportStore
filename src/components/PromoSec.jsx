import React from 'react'
import Button from './Button'

const PromoSec = () => {
  return (
    <section className="promo-section bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="promo-content max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the SportStore Community
            </h2>
            <p className="text-base text-white/90 mb-6 leading-relaxed">
              Get exclusive access to new arrivals, special offers, and expert training tips.
            </p>
            <button
              to="/shop"
              className=" bg-white text-yellow-500 font-black px-6 py-3 rounded-full cursor-pointer hover:scale-95 transition text-lg sm:text-xl"
            >
              Explore Now
            </button>
          </div>
        </div>
      </section>
  )
}

export default PromoSec
