import React, { useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper's navigation CSS

const About4 = () => {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef1.current && swiperRef2.current) {
      swiperRef1.current.swiper.slidePrev();
      swiperRef2.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef1.current && swiperRef2.current) {
      swiperRef1.current.swiper.slideNext();
      swiperRef2.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div>
        <div className='bg-black sm:px-14 px-5 py-24'>
          <div className='border overflow-hidden rounded-xl'>
            <div className='border-b-2  sm:p-16 p-6 sm:flex  space-y-4 sm:space-y-0 items-center justify-between'>
              <h2 className='text-white md:text-4xl text-2xl'>Customers Speak For Us</h2>
              <div className='flex gap-3'>
                <button
                  className='h-14 w-14 text-gray-500 flex justify-center items-center text-2xl rounded-full border border-gray-500'
                  onClick={handlePrevClick}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className='h-14 w-14 text-gray-500 flex justify-center items-center text-2xl rounded-full border border-gray-500'
                  onClick={handleNextClick}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 sm:p-16 p-6 lg:gap-12 gap-4'>
              <div className='lg:border-r-2 col-span-2 p-2'>
                <Swiper
                  ref={swiperRef1}
                  slidesPerView={1}
                  spaceBetween={6}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={false} // Disable Swiper's built-in navigation
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 1, spaceBetween: 30 },
                    1024: { slidesPerView: 1, spaceBetween: 40 },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className='flex flex-col justify-start items-start sm:gap-10 gap-4'>
                      <h2 className='text-white text-start text-2xl font-bold'>Kenneth S. Fisher</h2>
                      <p className='text-orange-500 text-base font-bold'>Marketing Manager</p>
                      <p className='text-gray-400 sm:text-xl text-base text-start'>
                        posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.
                        Aenean non odio porttitor, convallis erat sit amet, facilisis velit.
                        Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac
                        fringilla.
                      </p>
                      <div className='flex gap-1 text-yellow-600 text-lg'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='flex flex-col justify-start items-start sm:gap-10 gap-4'>
                      <h2 className='text-white text-2xl font-bold'>Francis A. Cote</h2>
                      <p className='text-orange-500 text-base font-bold'>Garden Maker</p>
                      <p className='text-gray-400 sm:text-xl text-base text-start'>
                        posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.
                        Aenean non odio porttitor, convallis erat sit amet, facilisis velit.
                        Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac
                        fringilla.
                      </p>
                      <div className='flex gap-1 text-yellow-600 text-lg'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='p-2'>
                <Swiper
                  ref={swiperRef2}
                  slidesPerView={1}
                  spaceBetween={6}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={false} // Disable Swiper's built-in navigation
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 1, spaceBetween: 30 },
                    1024: { slidesPerView: 1, spaceBetween: 40 },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="../assets/img/testimonial1 (2).png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="../assets/img/testimonial2 (2).png" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About4;
