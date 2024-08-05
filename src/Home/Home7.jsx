import React from 'react'
import Card3 from '../Cards/Card3'
import { fourth,third } from '../Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card4 from '../Cards/Card4';

const Home7 = () => {
  return (
   <>
    <div>
        <div className=' bg-black  pb-20 '>
            <div className='sm:px-14 px-5'>
                <div className=' border-2 border-gray-800'></div>
            </div>
            <div className=' flex justify-center  py-2'>
            <marquee
            behavior=""
            direction="scroll"
            scrollamount=""
            className="text-white lg:text-7xl md:text-5xl text-3xl   font-bold"
          >
          
            <div  className=' flex gap-10'>
              <div className=' md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>
                <h2> Vape Pens</h2>
              <div className=' md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>

                <h2>Vape Juice</h2>
              <div className='md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>

                <h2>E-Cigarettes</h2>
                <div className=' md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>
                <h2> Vape Pens</h2>
              <div className=' md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>

                <h2>Vape Juice</h2>
              <div className='md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>

                <h2>E-Cigarettes</h2>
                <div className=' md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>
                <h2> Vape Pens</h2>
              <div className=' md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>

                <h2>Vape Juice</h2>
              <div className='md:h-12 h-5 sm:w-12 w-5 bg-orange-500 rounded-full'></div>

                <h2>E-Cigarettes</h2>
            </div>
     
          </marquee>
            </div>
            <div className='sm:px-14 px-5 '>
                <div className=' border-2 border-gray-800'></div>
            </div>
            <div className='flex flex-wrap p-4 md:p-14'>
      <Swiper
        slidesPerView={1}  // Default value for smaller screens
        spaceBetween={10}  // Default value for smaller screens
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {third.map((ele, index) => (
          <SwiperSlide key={index}>
            <Card3 Data={ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
            <div className='  pb-16  pt-8'>
          <h2 className='sm:text-3xl text-2xl text-white font-bold text-center'>Our Top Brands</h2>
        </div>
        <div className=' sm:px-14 px-5 pb-24'>

        <Swiper
          slidesPerView={1}
          spaceBetween={6}
        //   pagination={{
        //     clickable: true,
        //   }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {fourth.map((ele) => (
            <SwiperSlide>
              <Card4 Data={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div  className=' sm:px-14 px-5'>


        <div className=' w-full  border border-gray-800   '></div>
        </div>


        </div>
    </div>
   </>
  )
}

export default Home7