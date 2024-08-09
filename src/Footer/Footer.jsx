import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { fourth } from '../Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card4 from '../Cards/Card4';


import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Footer = () => {
  return (
    <>
      <div className=' bg-black'>
        
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
        <div className='  bg-black footer sm:px-14 px-5  pb-14'>sm:gap-0
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:gap-0 pb-20'>
            <div className=' space-y-8'>
              <h2 className='text-xl text-white'>Customer Service</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Help Portal</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Contact Us</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium '>Delivery Information</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Click And Collect</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Refunds And Returns</p>
                </div>
              </div>
            </div>
            <div className=' space-y-8'>
              <h2 className='text-xl text-white'>Get To Know Us</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>About Us</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>News & Blog</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Careers</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Investors</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Contact Us</p>
                </div>
              </div>
            </div>
            <div className=' space-y-8'>
              <h2 className='text-xl text-white'>Vapes New Collections</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>E-Cigarettes</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Vape Pens</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Pod Systems</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300'>Disposable Vapes</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer w-max group'>
                  <div className='h-3 w-3 rounded-full border-2 border-gray-500 group-hover:border-orange-500 duration-300'></div>
                  <p className='text-gray-500 text-sm font-medium group-hover:text-orange-500 duration-300 '>Nicotine Salt Devices</p>
                </div>
              </div>
            </div>
            <div className=' space-y-8 '>
              <h2 className='text-xl text-white'>Get Newsletter</h2>
              <div className='flex flex-col gap-10 relative'>
                <input
                  type="text"
                  className='h-16 w-full inp1 outline-none focus:text-white rounded-full placeholder:text-gray-500 pl-6 pr-20 border-2 border-gray-500'
                  placeholder='Your Email'
                />
                <button className='h-14 w-14 rounded-full bg-orange-500 absolute top-1 right-3 text-white text-2xl flex items-center justify-center'>
                <FaPaperPlane />
                </button>
                <div className='flex gap-1'>
                  <div className='h-11 w-11 border-2 border-gray-500 rounded-full hover:border-orange-500  hover:text-orange-500 duration-300 cursor-pointer  text-gray-500 flex justify-center items-center text-lg'>
                  <FaFacebookF />
                  </div>
                  <div className='h-11 w-11 border-2 border-gray-500 rounded-full hover:border-orange-500  hover:text-orange-500 duration-300 cursor-pointer  text-gray-500 flex justify-center items-center text-lg'>
                  <FaTwitter />
                  </div>
                  <div className='h-11 w-11 border-2 border-gray-500 rounded-full hover:border-orange-500  hover:text-orange-500 duration-300 cursor-pointer  text-gray-500 flex justify-center items-center text-lg'>
                  <FaLinkedinIn />
                  </div>
                  <div className='h-11 w-11 border-2 border-gray-500 rounded-full hover:border-orange-500  hover:text-orange-500 duration-300 cursor-pointer  text-gray-500 flex justify-center items-center text-lg'>
                  <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-2 border-gray-800'></div>
          <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  pt-10 gap-5'>
            <div className=' '>
          <img src="../assets/img/logo (3).svg" alt="" className='  ' />

            </div>
            <div className='  md:flex justify-center items-center'>
              <p className=' text-gray-500 lg:text-base text-sm'>© Copyright 2023 Odor All Rights Reserved</p>
            </div>
            <div className='  lg:flex justify-end'>
              <img src="../assets/img/payment.png" alt="" />
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;