import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { RiAuctionFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
function Hero() {
  return (
    <div className="text-white select-none">
      {/* Basliq ve paraqraflar */}
      <div className="max-w-[800px] mt-[40px] md:mt-[80px] sm:mt-[100px]  mx-auto text-center flex flex-col justify-center">
        
        <h1 className=" text-xl font-bold md:text-5xl sm:text-3xl md:py-6 mt-[10px]">
          Ən sərfəli qiymətlərlə məhsulları hərracla əldə edin
        </h1>

        <div className="flex justify-center items-center">
          <p className="text-[14px] md:text-3xl sm:text-2xl font-bold py-4">
            Hər növ əşyaların hərracı
          </p>
          <ReactTyped
            strings={["Texnoloji","Geyim", "İnşaat","Kitab"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className=" text-[16px] md:text-4xl md:pl-4 sm:text-3xl  text-[rgb(0,223,154)] font-bold  pl-2 flex flex-wrap"
          />
        </div>
        {/* <p className="md:text-2xl text-xl font-bold text-gray-500">
          Məhsullar hərracda! Qiymətlərə sən qərar ver!
        </p> */}
      </div>
      {/* Search input */}
      <div className="flex items-center flex-col px-4 mt-[15px] gap-4">
        <div className="flex items-center lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md">
          <FaSearch className=" text-gray-500 mr-2 text-xl " />
          <input
            type="text"
            placeholder="Axtar..."
            className="w-full outline-none bg-transparent text-black placeholder-black"
          />
          <FaFilter className="cursor-pointer text-gray-500 mr-2 text-xl" />
        </div>
        <div className="flex mt-5 gap-2">
          <Link
            to="/CreateAuction"
            className="flex justify-center items-center gap-1 text-[14px] font-bold bg-black text-white border rounded-full w-[145px] h-[35px] cursor-pointer hover:text-black hover:bg-white transition-colors ease-in-out sm:text-[20px] sm:gap-2 sm:w-[180px] sm:h-[50px]"
          >
            <RiAuctionFill size={20} />
            Hərrac Yarat
          </Link>

          <Link
            to="/LiveAuctions"
            className="flex justify-center items-center gap-1 text-[14px] font-bold bg-black text-white border rounded-full w-[145px] h-[35px] cursor-pointer hover:text-black hover:bg-white transition-colors ease-in-out sm:text-[20px] sm:gap-2 sm:w-[180px] sm:h-[50px]"
          >
            <FaClock size={20} />
            Canlı Hərraclar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
