import React from 'react';
import Card1 from '../Cards/Card1';
import { first } from '../Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home2 = () => {
  return (
    <>
      <div className='bg-black pt-24 pb-64 space-y-24 sm:px-14 px-5'>
        <div className=' '>
          <h2 className='sm:text-3xl text-2xl text-white font-bold text-center'>Our Top Categories</h2>
        </div>
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
              spaceBetween: 40,
            },
          }}
          // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {first.map((ele) => (
            <SwiperSlide>
              <Card1 Data={ele} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=' w-full  border border-gray-800   '></div>
      </div>
    </>
  );
};

export default Home2;