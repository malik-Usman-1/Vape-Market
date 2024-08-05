import React from 'react'
import { useState,useEffect } from 'react';
import Nav from '../Navbar/Nav';



const images = [
    '../assets/img/banner-two-image1 (1).jpg',
    '../assets/img/banner-two-image2 (1).jpg',
    '../assets/img/banner-two-image3 (1).jpg',
  ];
  



const Home1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);




    
  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimateText(true);
      setTimeout(() => setAnimateText(false), 5000); // Reset animation after 5 seconds
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
   <>
   <div>

   <div className='relative overflow-hidden '>
      <div className='relative z-10 overflow-hidden pb-16 '>
   <Nav/>

       
        <div className={` lg:w-1/2  px-16 space-y-8 pt-20 ${animateText ? 'animate-slide-in' : ''}`}>
          <div className={`slide-in-text ${animateText ? 'animate-delay-1' : ''}`}>
            <div className='flex items-center gap-2'>
              <img src="../assets/img/fire (1).svg" alt="" />
              <h2 className='text-xl text-white font-bold'>GET <span className='text-orange-500'>25% OFF</span> NOW</h2>
            </div>
          </div>
          <div className={`slide-in-text ${animateText ? 'animate-delay-2' : ''}`}>
            <h2 className='sm:text-7xl text-4xl prost font-bold text-white'>Find Everything For <span className='text-orange-500'>Vaping</span></h2>
          </div>
          <div className={`slide-in-text ${animateText ? 'animate-delay-3' : ''}`}>
            <p className='text-gray-300'>Sell Globally In Minutes With Localized Currencies Languages, And Expire In Every Market. Only A variety Of Vaping Products</p>
          </div>
          <div className={`slide-in-text ${animateText ? 'animate-delay-4' : ''}`}>
            <div>
              <p className='text-gray-300'>Starting Price</p>
              <h2 className='text-white sm:text-3xl text-2xl font-bold'>$99.00</h2>
            </div>
          </div>
          <div className={`slide-in-text ${animateText ? 'animate-delay-5' : ''}`}>
            <div className='space-x-6 flex'>
              <button className='rounded-full h-12 w-32 bg-orange-500 text-white'>Shop Now</button>
              <button className='rounded-full h-12 w-32 bg-white text-orange-500'>View Details</button>
            </div>
          </div>
        </div>
      </div>

      {images.map((image, index) => (
        <div key={index} className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>

   </div>
   </>
  )
}

export default Home1