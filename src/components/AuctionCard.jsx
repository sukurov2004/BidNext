import React from 'react'

function AuctionCard({ title, image, price, timeLeft }) {
  return (
  <div className="bg-[#0A0F1A] rounded-2xl shadow-lg p-4 w-full border border-gray-200">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />
    <h2 className="text-xl font-bold mt-3 text-gray-800">{title}</h2>
    <p className="text-indigo-600 font-medium mt-1">Qiymət: ₼{price}</p>
    <p className="text-gray-500 text-sm">Qalan vaxt: {timeLeft}</p>

    <div className='flex justify-between items-center mt-4'>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
        Təklif ver
      </button>

      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <span className="text-red-600 font-semibold uppercase text-sm">Canlı</span>
      </div>
    </div>
  </div>
  )
}

export default AuctionCard