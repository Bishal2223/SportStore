import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useCart()

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.length === 0?(
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty 🛒</h2>
              <p className="text-gray-500 mb-4">
                Looks like you haven't added anything yet.
              </p>

              <Link to="/shop" className='border-2 border-yellow-500 py-5 rounded-full'>
                <Button value="Goto Shopping"/>
              </Link>
            </div>
          ): (cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    disabled={item.qty === 1}
                    className="px-3 border rounded"
                  >−</button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 border rounded"
                  >+</button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-orange-500 text-sm mt-2"
                >
                  Remove
                </button>
              </div>

              <div className="font-bold text-lg">
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          )))}
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-yellow-400 text-white py-3 rounded-xl">
            Proceed to Checkout
          </button>

          <Link
            to="/shop"
            className="block text-center text-yellow-500 mt-4"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cart