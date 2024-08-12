import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper's navigation CSS
// import './Home6.css'; // Import your custom CSS file

const Home6 = () => {
  return (
    <>
      <div className=' '>
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-black  gap-14 sm:px-14 px-5  sm:py-28 py-16'>
          <div className='flex flex-col sm:gap-8 gap-5 justify-center'>
          <div className='flex items-center gap-2'>
              <img src="../assets/img/fire.svg" alt="" />
              <h2 className='text-xl text-white font-bold'>GET <span className='text-orange-500'>25% OFF</span> NOW</h2>
            </div>
            <h2 className='sm:text-4xl text-2xl text-white font-bold'>Latest Arrival Products</h2>
            <p className='text-gray-500  text-2xl'>
          <del>$99.00</del> <span className=' text-white font-bold'>$49.00</span>
        </p>
            <p className='text-gray-300 font-semibold sm:text-base text-sm'>There Are Many Variations Of Passages Of Lorem Ipsum Available, But
            The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which</p>
            <div className='  flex sm:gap-10 gap-7'>
              <p className=' text-gray-300 text-sm sm:text-base font-semibold'>. 100% Natural</p>
              <p className=' text-gray-300 text-sm sm:text-base font-semibold'> . Coupan $61.99, Code:W2</p>
              <p className=' text-gray-300 text-sm sm:text-base font-semibold'> . 30 Day Refund</p>
            </div>
            <div className=' border-2 border-gray-800'></div>
            <div className=' sm:flex space-y-3 sm:space-y-0 items-center gap-16'>
              <div>
                <h2 className=' text-white'>HUNGRY UP !</h2>
                <p className=' text-white'>Offer End In :</p>
              </div>
              <div className=' flex gap-2'>
                <div className=' border-2 border-gray-800 h-20 w-20 flex items-center flex-col justify-center rounded-full'>
                  <h2 className=' text-white text-2xl'>-231</h2>
                  <p className='  text-gray-300 '>Day</p>
                </div>
                <div className=' border-2 border-gray-800 h-20 w-20  flex items-center flex-col justify-center rounded-full'>
                <h2 className=' text-white text-2xl'>-21</h2>
                <p className='  text-gray-300 '>Day</p>
                </div>
                <div className=' border-2 border-gray-800 h-20 w-20  flex items-center flex-col justify-center rounded-full'>
                <h2 className=' text-white text-2xl'>-19</h2>
                <p className='  text-gray-300 '>Day</p>
                </div>
                <div className=' border-2 border-gray-800 h-20 w-20  flex items-center flex-col justify-center rounded-full'>
                <h2 className=' text-white text-2xl'>-58</h2>
                <p className='  text-gray-300 '>Day</p>
                </div>



              </div>
            </div>
           
          </div>
          <div className='flex justify-center items-center'>
            <div className='card sm:h-[83vh] h-[49vh] w-[49vh] sm:w-[83vh] rounded-full sm:p-14 p-8'>
              <div className='flex justify-center home6 items-center  '>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={6}
                  // pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={true} // Enable navigation
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 1, spaceBetween: 30 },
                    1024: { slidesPerView: 1, spaceBetween: 40 },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="../assets/img/get-image (1).png" alt=""  />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="../assets/img/get-image2 (1).png" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home6;