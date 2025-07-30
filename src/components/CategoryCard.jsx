import React from "react";
import { FaMobileAlt, FaCarSide, FaCouch, FaTv, FaTshirt, FaBook } from "react-icons/fa";

const CategoryCard = () => {
  return (
    <div className="bg-black py-8 px-4">
         <h1 className="text-3xl font-bold text-[#00DF9A] mb-8">Kateqoriyalar</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">

        <div className="flex flex-col items-center gap-2 transform hover:scale-90 transition duration-300 cursor-pointer">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md border-2 border-green-500">
            <FaMobileAlt className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-white text-sm font-semibold">Telefonlar</h3>
        </div>

        <div className="flex flex-col items-center gap-2 transform hover:scale-90 transition duration-300 cursor-pointer">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md border-2 border-green-500">
            <FaCarSide className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-white text-sm font-semibold">Avtomobillər</h3>
        </div>

        <div className="flex flex-col items-center gap-2 transform hover:scale-90 transition duration-300 cursor-pointer">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md border-2 border-green-500">
            <FaCouch className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-white text-sm font-semibold">Ev əşyaları</h3>
        </div>

        <div className="flex flex-col items-center gap-2 transform hover:scale-90 transition duration-300 cursor-pointer">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md border-2 border-green-500">
            <FaTv className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-white text-sm font-semibold">Elektronika</h3>
        </div>

        <div className="flex flex-col items-center gap-2 transform hover:scale-90 transition duration-300 cursor-pointer">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md border-2 border-green-500">
            <FaTshirt className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-white text-sm font-semibold">Moda</h3>
        </div>

        <div className="flex flex-col items-center gap-2 transform hover:scale-90 transition duration-300 cursor-pointer">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-md border-2 border-green-500">
            <FaBook className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-white text-sm font-semibold">Kitablar</h3>
        </div>

      </div>
    </div>
  );
};

export default CategoryCard;


