import React from 'react'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import AuctionCard from '../components/AuctionCard';
import CategoryCard from '../components/CategoryCard';
// !herrac kartlari
  const auctions = [
    {
      title: "Vintage Watch",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      price: 150,
      timeLeft: "2h 30m",
    },
    {
      title: "MacBook",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      price: 250,
      timeLeft: "5h 10m",
    },
    {
      title: "Antique Vase",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      price: 400,
      timeLeft: "1d 3h",
    },
  ];

function Home() {
return (
  <div className="min-h-screen bg-[#000300] p-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero bölməsi */}
      <Hero />

      {/* Necə işləyir hissəsi */}
      <HowItWorks />

      {/* Canlı hərraclar kartları */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold text-[#00DF9A] mb-8">Canlı Hərraclar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {auctions.map((item, index) => (
            <AuctionCard
              key={index}
              title={item.title}
              image={item.image}
              price={item.price}
              timeLeft={item.timeLeft}
            />
          ))}
        </div>
      </div>

      {/* Kateqoriya kartları */}
      <div className="mt-12">
        <CategoryCard />
      </div>
    </div>
  </div>
);
}

export default Home