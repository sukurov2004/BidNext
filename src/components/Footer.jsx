import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white py-10 px-4">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 border-b border-gray-700 pb-8 px-4">
        {/* Logo və təsvir (sol hissə) */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2 text-3xl text-[#00df9a] font-bold select-none mb-2">
            BidNext
          </div>
          <p className="text-[16px] text-[#ffffffa4] leading-relaxed">
            " <strong>BidNext</strong> ilə hər növ əşyaların satışı artıq daha
            asan və şəffafdır. İndi qoşul və rəqəmsal hərracın bir parçası ol!"
          </p>
        </div>

        {/* Sağ hissə: 3 bölmə yan-yana */}
        <div className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bölmə 2: Şirkət */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-[#00df9a] font-bold select-none mb-2">
              Şirkət
            </h3>
            <ul className="space-y-2 text-[16px] text-[#ffffffa4]">
              <Link to="/about">
                <li className="hover:text-[#00df9a] cursor-pointer">
                  Haqqımızda
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-[#00df9a] cursor-pointer">
                  Bizimlə əlaqə
                </li>
              </Link>

              <li className="hover:text-[#00df9a] cursor-pointer">
                Əməkdaşlıq
              </li>
            </ul>
          </div>

          {/* Bölmə 3: Dəstək */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-[#00df9a] font-bold select-none mb-2">
              Dəstək
            </h3>
            <ul className="space-y-2 text-[16px] text-[#ffffffa4]">
              <li className="hover:text-[#00df9a] cursor-pointer">
                Tez-tez verilən suallar
              </li>
              <li className="hover:text-[#00df9a] cursor-pointer">
                Məxfilik siyasəti
              </li>
            </ul>
          </div>

          {/* Bölmə 4: Qaydalar */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-[#00df9a] font-bold select-none mb-2">
              Qaydalar
            </h3>
            <ul className="space-y-2 text-[16px] text-[#ffffffa4]">
              <li className="hover:text-[#00df9a] cursor-pointer">
                İstifadəçi şərtləri
              </li>
              <li className="hover:text-[#00df9a] cursor-pointer">
                Qanunvericilik
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt info və sosial media */}
      <div className="w-full max-w-[1200px] mx-auto mt-6 px-4 flex flex-col md:flex-row justify-between items-center text-[15px] text-[#ffffffa4] gap-4">
        <div className="flex gap-4 text-white">
          <FaInstagram className="hover:text-[#00df9a] text-2xl cursor-pointer" />
          <FaFacebookF className="hover:text-[#00df9a] text-2xl cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#00df9a] text-2xl cursor-pointer" />
        </div>
        <p>© 2025 Bütün hüquqlar qorunur</p>
      </div>
    </footer>
  );
}

export default Footer;
