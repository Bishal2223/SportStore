import React from 'react'

const CATEGORIES = [
  {name: "Football", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55" },
  {name: "Basketball", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc" },
  {name: "Volleyball", img: "https://images.unsplash.com/photo-1727461878184-b3f4f92a484e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sbHliYWxsfGVufDB8fDB8fHww" },
  {name: "Badminton", img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6" },
  {name: "Cricket", img: "https://images.unsplash.com/photo-1593766788306-28561086694e" },
  {name: "Tennis", img: "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVubmlzfGVufDB8fDB8fHww" },
];

const Categories = () => {
  return (
    <>
     <section className='flex justify-center items-center gap-10 flex-wrap m-9'>
        <h2 className="w-full text-3xl text-yellow-500 font-black italic text-center hover:scale-110 transition">
          SHOP BY SPORT</h2>
        {CATEGORIES.map((e,idx) =>{
            return(
             <div key={idx} className="relative group h-100 w-90 shadow-xl rounded-2xl overflow-hidden transition">
                <div className="
                h-full bg-cover bg-center group-hover:scale-110 ransition-transform duration-500
                "style={{backgroundImage: `url(${e.img})`}}></div>
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <h2 className='text-xl font-bold text-white uppercase tracking-wide'>{e.name}</h2>
                </div>
            </div>
            )
        })}    
     </section>
    </>
  )
}

export default Categories
