import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const CATEGORIES = [
  { name: "Football", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55" },
  { name: "Basketball", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc" },
  { name: "Volleyball", img: "https://images.unsplash.com/photo-1727461878184-b3f4f92a484e?w=900&auto=format&fit=crop&q=60" },
  { name: "Badminton", img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6" },
  { name: "Cricket", img: "https://images.unsplash.com/photo-1593766788306-28561086694e" },
  { name: "Tennis", img: "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?w=900&auto=format&fit=crop&q=60" },
];

const Categories = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-black italic text-center mb-10">
        SHOP BY CATEGORY
      </h2>
      <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center">
        {CATEGORIES.map((e, idx) => (
          <Link
            key={idx}
            to={`/shop?category=${e.name}`}
            className="group w-full flex justify-center">
            <div className="relative h-64 w-full max-w-[340px] rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${e.img})` }}
              ></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {e.name}
                </h3>
                <div className="mt-1 h-1 w-12 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;