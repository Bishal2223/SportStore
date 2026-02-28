import React from 'react'

const PRODUCTS = [
  // FOOTBALL
  { id: 1, name: 'Pro Football Boots', price: 220, category: 'Football', img: 'https://images.unsplash.com/photo-1571267434388-6a1df2649dce?w=900&auto=format&fit=crop&q=60', },
  { id: 2, name: 'Match Football', price: 45, category: 'Football', img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6', },
  { id: 3, name: 'Goalkeeper Gloves', price: 60, category: 'Football', img: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144', },
  { id: 4, name: 'Football Shin Guards', price: 30, category: 'Football', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e', },

  // BASKETBALL
  { id: 5, name: 'Elite Basketball Shoes', price: 190, category: 'Basketball', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', },
  { id: 6, name: 'Indoor Basketball', price: 40, category: 'Basketball', img: 'https://images.unsplash.com/photo-1519861531473-9200262188bf', },
  { id: 7, name: 'Basketball Jersey', price: 55, category: 'Basketball', img: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d', },
  { id: 8, name: 'Basketball Wrist Band', price: 18, category: 'Basketball', img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6', },

  // VOLLEYBALL
  { id: 9, name: 'Professional Volleyball', price: 35, category: 'Volleyball', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e', },
  { id: 10, name: 'Volleyball Knee Pads', price: 28, category: 'Volleyball', img: 'https://i.pinimg.com/1200x/e5/5c/ca/e55cca730138c1eea0295ffe10182cf8.jpg', },
  { id: 11, name: 'Volleyball Net', price: 75, category: 'Volleyball', img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1', },
  { id: 12, name: 'Volleyball Shoes', price: 140, category: 'Volleyball', img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6', },

  // BADMINTON
  { id: 13, name: 'Badminton Racket Pro', price: 120, category: 'Badminton', img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6', },
  { id: 14, name: 'Feather Shuttlecock Pack', price: 25, category: 'Badminton', img: 'https://i.pinimg.com/736x/61/59/e5/6159e575581c43edc597cb1e669b7dc3.jpg', },
  { id: 15, name: 'Badminton Grip Tape', price: 12, category: 'Badminton', img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6', },
  { id: 16, name: 'Badminton Kit Bag', price: 85, category: 'Badminton', img: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d', },

  // CRICKET
  { id: 17, name: 'English Willow Cricket Bat', price: 260, category: 'Cricket', img: 'https://images.unsplash.com/photo-1593766788306-28561086694e', },
  { id: 18, name: 'Cricket Leather Ball', price: 22, category: 'Cricket', img: 'https://plus.unsplash.com/premium_photo-1677261483398-b792bce89897?w=900&auto=format&fit=crop&q=60', },
  { id: 19, name: 'Cricket Batting Gloves', price: 75, category: 'Cricket', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e', },
  { id: 20, name: 'Cricket Helmet', price: 140, category: 'Cricket', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b', },

  // TENNIS
  { id: 21, name: 'Tennis Racket Control', price: 180, category: 'Tennis', img: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6', },
  { id: 22, name: 'Pressurized Tennis Balls', price: 20, category: 'Tennis', img: 'https://images.unsplash.com/photo-1538512035249-a07f22cb1a91', },
  { id: 23, name: 'Tennis Grip Tape', price: 15, category: 'Tennis', img: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6', },
  { id: 24, name: 'Tennis Shoes', price: 160, category: 'Tennis', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', },
];

const Shop = () => {
  return (
    <section>
       <div className="flex flex-col justify-center items-center space-y-2 pt-16 pb-10 px-3 border-b border-b-gray-400">
         <h2 className='font-black text-6xl tracking-wide text-shadow-md'>Our Store</h2>
         <p className='text-gray-400 text-center'>Browse our complete collection of premium sports equipment</p>
       </div>
      <div className='flex flex-wrap justify-center items-center'>
       {PRODUCTS.map((e) =>{
        return(
          <div key={e.id} className="py-10 px-5">
            <div className="relative group h-100 w-90 shadow-xl rounded-2xl overflow-hidden transition">
              <div className="
              h-full bg-cover bg-center group-hover:scale-110 ransition-transform duration-500
              "style={{backgroundImage: `url(${e.img})`}}></div>
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h2 className='text-xl font-bold text-white uppercase tracking-wide'>{e.name}</h2>
              </div>
            </div>
          </div>
        )
       })}</div>
    </section>
  )
}

export default Shop
