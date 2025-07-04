import Reac, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleNavClose = () => setNav(false);
  // Ekran böyüyəndə menyunu avtomatik bağla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1029) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between items-center h-[85px] max-w-[1240px] mx-auto px-4 text-white ">
      <div>
        <h1 className="w-full md:text-3xl sm:text-2xl text-xl text-[#00df9a] font-bold select-none">
          <Link to="/">BidNext</Link>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex  select-none text-[18px]">
       
     <li className="cursor-pointer p-4 transition-transform duration-300 hover:-translate-y-1">
  <Link to="/auctions">Hərraclar</Link>
</li>
        <li className="cursor-pointer p-4 transition-transform duration-300 hover:-translate-y-1 whitespace-nowrap">
          <Link to="/CreateAuction">Hərrac Yarat</Link>
        </li>

        <li className="cursor-pointer p-4 transition-transform duration-300 hover:-translate-y-1">
          <Link to="/about">Haqqımızda</Link>
        </li>
        <li className="cursor-pointer p-4 transition-transform duration-300 hover:-translate-y-1">
          <Link to="/contact">Əlaqə</Link>
        </li>
      </ul>

      {/* buttons */}
      <div className="flex gap-2 font-bold select-none">
        <Link
          to="/login"
          className="flex items-center gap-1 px-2 py-1 text-white border border-white text-[13px] sm:px-4 sm:text-[15px]  sm:py-2 rounded hover:bg-white hover:text-black transition ease-in"
        >
           <FaUserLarge size={15}/>
          Giriş
        </Link>
        <Link
          to="/register"
          className="flex items-center gap-1 py-1 bg-[#00df9a] px-2 text-black text-[13px]  sm:px-4 sm:text-[15px] sm:py-2 rounded  hover:bg-white transition ease-in"
        >
          <MdOutlineAssignment size={15} />
          Qeydiyyat
        </Link>
      </div>
   

      {/* Burger menu Icon */}
      <div className="cursor-pointer block lg:hidden " onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl text-[#00df9a] font-bold m-4 select-none">
          <Link to="/" onClick={handleNavClose}>
            BidNext
          </Link>
        </h1>

        <ul className="uppercase p-4 font-bold">
          <li className="cursor-pointer p-4 border-b border-gray-600 select-none transition-transform duration-300 hover:translate-x-3">
            <Link to="/auctions" onClick={handleNavClose}>
              Hərraclar
            </Link>
          </li>
          <li className="cursor-pointer p-4 border-b border-gray-600 select-none transition-transform duration-300 hover:translate-x-3">
            <Link to="/CreateAuction" onClick={handleNavClose}>
              Hərrac Yarat
            </Link>
          </li>

          <li className="cursor-pointer p-4 border-b border-gray-600 select-none transition-transform duration-300 hover:translate-x-3">
            <Link to="/about" onClick={handleNavClose}>
              Haqqımızda
            </Link>
          </li>
          <li className="cursor-pointer p-4 border-b border-gray-600 select-none transition-transform duration-300 hover:translate-x-3">
            <Link to="/contact" onClick={handleNavClose}>
              Əlaqə
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
