import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

const About5 = () => {
 

  return (
    <>
      <div>
        <div className=' bg-[#191919] sm:px-14 px-5 pb-12'>
          <div className=' overflow-hidden rounded-xl'>
            <div className='  sm:p-16  py-6 sm:flex space-y-4 sm:space-y-0 items-center justify-between'>
              <h2 className='text-white sm:text-4xl text-2xl'>our latest blog</h2>
              <div className='flex gap-3'>
              <button className='relative rounded-full h-12 w-36 bg-white text-orange-500 font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>View All Blog</span>
  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>
</button>
              </div>
            </div>
            <div className='grid xl:grid-cols-3  grid-cols-1 sm:p-4 gap-8'>
              <div className='border rounded-2xl col-span-2   p-2'>
                <Swiper
            
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
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
                    <div className=' lg:flex gap-9  space-y-4 sm:space-y-0  sm:p-6 p-2'>
                   
                    <div className='flex flex-col justify-start items-start sm:gap-8 gap-4'>
                    <button className='relative rounded-full h-11 w-24 bg-white text-orange-500 font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Vapers</span>
  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>
</button>
                      <h2 className='text-white text-start text-xl font-bold'>Roup Of Young Volunteers Park. They Are Vaping</h2>
                      <p className='text-gray-300 text-base text-start'>
                      vapers planting is the act of planting young vaperss, shrubs, or
                                                        other woody
                                                        plants into the
                                                        ground to establish new
                                                        vapes.
                      </p>
                      <p className=' text-start text-base sm:text-lg text-gray-500'>By Max Trewhitt 2 Weeks Ago</p>
                     
                    </div>
                    <img src="../assets/img/blog-image1 (2).png" alt="" className=' rounded-2xl' />
                    </div>


                  </SwiperSlide>
                  <SwiperSlide>
                  <div className=' lg:flex gap-9 sm:p-6 space-y-4 sm:space-y-0   p-2'>
                   
                   <div className='flex flex-col justify-start items-start sm:gap-8 gap-4'>
                   <button className='relative rounded-full h-11 w-24 bg-white text-orange-500 font-semibold overflow-hidden group'>
 <span className='relative z-10 group-hover:text-white duration-300'>Vapers</span>
 <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>
</button>
                     <h2 className='text-white text-start text-xl font-bold'>Roup Of Young Volunteers Park. They Are Vaping</h2>
                     <p className='text-gray-300 text-base text-start'>
                     vapers planting is the act of planting young vaperss, shrubs, or
                                                       other woody
                                                       plants into the
                                                       ground to establish new
                                                       vapes.
                     </p>
                     <p className=' text-start text-base sm:text-lg text-gray-500'>By Max Trewhitt 2 Weeks Ago</p>
                    
                   </div>
                   <img src="../assets/img/blog-image2 (2).png" alt="" className=' rounded-2xl' />
                   </div>

                  </SwiperSlide>
                  <SwiperSlide>
                  <div className=' lg:flex gap-9 space-y-4 sm:space-y-0  sm:p-6 p-2'>
                   
                   <div className='flex flex-col justify-start items-start sm:gap-8 gap-4'>
                   <button className='relative rounded-full h-11 w-24 bg-white text-orange-500 font-semibold overflow-hidden group'>
 <span className='relative z-10 group-hover:text-white duration-300'>Vapers</span>
 <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>
</button>
                     <h2 className='text-white text-start text-xl font-bold'>Roup Of Young Volunteers Park. They Are Vaping</h2>
                     <p className='text-gray-300 text-base text-start'>
                     vapers planting is the act of planting young vaperss, shrubs, or
                                                       other woody
                                                       plants into the
                                                       ground to establish new
                                                       vapes.
                     </p>
                     <p className=' text-start text-base sm:text-lg text-gray-500'>By Max Trewhitt 2 Weeks Ago</p>
                    
                   </div>
                   <img src="../assets/img/blog-image3 (2).png" alt="" className=' rounded-2xl' />
                   </div>

                  </SwiperSlide>
                </Swiper>
              </div>
              <div className=' xl:border rounded-2xl  space-y-8 sm:p-6  p-4'>
               <img src="../assets/img/blog-image-sm (2).png" alt="" className=' rounded-2xl ' />
               <h2  className='text-white text-start text-xl font-bold'>Close Up Picture Of The Sapling Of The Vape Is</h2>
               <div className=' flex justify-between items-center'>
               <button className='relative rounded-full h-11 w-24 bg-white text-orange-500 font-semibold overflow-hidden group'>
 <span className='relative z-10 group-hover:text-white duration-300'>Vapers</span>
 <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>
</button>
<p className=' text-gray-500'>2 Weeks Ago</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About5;
