import React from 'react';
import banner2 from '../assets/bannerr/2.png';
import banner3 from '../assets/bannerr/3.png';

const banners = [
  {
    id: 1,
    image: banner2,
    alt: "Premium Printer Solutions"
  },
  {
    id: 2,
    image: banner3,
    alt: "Expert Hardware Support"
  }
];

const Hero2 = () => {
  return (
    <section className="w-full bg-white py-4 md:py-0 font-urbanist">
      <div className="max-w-full mx-auto px-4 md:px-0 flex flex-col gap-6 md:gap-10">
        
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="relative w-full overflow-hidden group"
          >
            <img 
              src={banner.image} 
              alt={banner.alt} 
              className="w-full h-auto object-cover "
            />
            
          
          </div>
        ))}

      </div>
    </section>
  );
};

export default Hero2;
