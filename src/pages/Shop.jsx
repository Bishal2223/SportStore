import React from 'react'

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

const Shop = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center gap-2 pt-16 pb-10 px-4 border-b border-gray-400">
        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide text-center">
          Our Store
        </h2>
        <p className="text-gray-400 text-center max-w-xl">
          Browse our complete collection of premium sports equipment
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-10 py-12 place-items-center">
        {PRODUCTS.map((e) => (
          <div
            key={e.id}
            className="relative group w-full max-w-[240px] h-64 sm:h-72 md:h-80 shadow-xl rounded-2xl overflow-hidden"
          >
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${e.img})` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                {e.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop
