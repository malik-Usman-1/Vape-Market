import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper's navigation CSS

const About4 = () => {
  return (
  <>
  <div>
    <div className=' bg-black  px-14'>
        <div className=' border py-16 px-16 flex items-center justify-between'>
            <h2 className=' text-white text-4xl'>Customers Speak For Us</h2>
            <div className=' flex gap-3'>
                <div className=' h-14 w-14  text-gray-500 flex justify-center items-center text-2xl rounded-full border border-gray-500'>
                <FaChevronLeft />
                </div>
                <div className=' h-14 w-14  text-gray-500 flex justify-center items-center text-2xl rounded-full border border-gray-500'>
                <FaChevronRight />
                </div>

            </div>
        </div>
        <div className=' border grid grid-cols-3 '>
            <div className=' border col-span-2'></div>
            <div className=' border'>
            <Swiper
                  slidesPerView={1}
                  spaceBetween={6}
                  // pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                //   navigation={true} // Enable navigation
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 1, spaceBetween: 30 },
                    1024: { slidesPerView: 1, spaceBetween: 40 },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="../assets/img/get-image.png" alt=""  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="../assets/img/get-image2.png" alt="" />
                  </SwiperSlide>
                </Swiper>
            </div>


        </div>
    </div>
  </div>
  </>
  )
}

export default About4