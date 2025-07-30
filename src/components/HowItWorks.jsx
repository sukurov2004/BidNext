import React from 'react'
import { FaUserPlus, FaPlusSquare, FaGavel, FaCheckCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
function HowItWorks() {
   const steps = [
    {
      title: "1. Qeydiyyat",
      icon: <FaUserPlus size={40} className="text-[#00df9a]" />,
      description:
        "İstifadəçi hesabı yaradaraq sistemə daxil olur. Elan yaratmaq və ya hərraca qoşulmaq üçün qeydiyyat vacibdir.",
    },
    {
      title: "2. Elan Yarat",
      icon: <FaPlusSquare size={40} className="text-[#00df9a]" />,
      description:
        "Məhsulun şəkli, təsviri və başlanğıc qiyməti ilə hərrac yaradılır. Başlama və bitmə vaxtı seçilir.",
    },
    {
      title: "3. Təklif Ver",
      icon: <FaGavel size={40} className="text-[#00df9a]" />,
      description:
        "İstifadəçilər minimum artırımla təklif verirlər. Ən yüksək təklif sahibi lider olur.",
    },
    {
      title: "4. Qalib Seçilir",
      icon: <FaCheckCircle size={40} className="text-[#00df9a]" />,
      description:
        "Hərrac vaxtı bitdikdə, ən yüksək təklif sahibi qalib olur və alış prosesi başlayır.",
    },
  ];

  return (
    <Link to="/register">
  <div className="w-full bg-[#000300] text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#00df9a] mb-10">Necə İşləyir?</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0a0f1a] rounded-2xl shadow-lg p-6 hover:-translate-y-3 transition-transform duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
     </Link>
  )
 
}

export default HowItWorks