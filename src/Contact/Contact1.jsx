import React from 'react'
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact1 = () => {
  return (
  <>
  <div>
    <div className=' bg-black  sm:px-14 px-5'>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-10 py-24'>
        <div className='relative '>
    <img src="../assets/img/01.jpg" alt="" className="w-full  h-[540px]  md:h-[605px] " />
    <div className='absolute inset-0 bg-black bg-opacity-50 md:space-y-14 space-y-6 py-10  md:px-8 px-4 '>
        <h2 className=' text-white md:text-4xl text-2xl'>Have something in mind?
        Let's talk.</h2>
        <p className='text-white md:text-xl text-lg'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim.</p>
        <img src="../assets/img/arry.png" alt="" />
        <div className=' space-y-4'>
            <div className=' flex gap-3 items-center'>
                <div className=' h-10 w-10 bg-white bg-opacity-30 flex justify-center items-center'>
                <MdLocationOn className='  text-2xl  text-white ' />
                </div>
                <p className=' text-white md:text-lg text-base'>Afzal road sanda kalan Lahore.</p>
            </div>
            <div className=' flex gap-3 items-center'>
                <div className=' h-10 w-10  bg-white bg-opacity-30 flex justify-center items-center'>
                <IoCall  className='  text-2xl  text-white '/>
                </div>
                <p className=' text-white md:text-lg text-base'>03164466401</p>
            </div>
            <div className=' flex gap-3 items-center'>
                <div className=' h-10 w-10 bg-white bg-opacity-30 flex justify-center items-center'>
                <IoMail className='  text-2xl  text-white ' />
                </div>
                <p className=' text-white md:text-lg text-base'>ujamshaid62@gmail.com</p>
            </div>
        </div>
    </div>
</div>
            <div className='  sm:space-y-12 space-y-6'>
                <input type="text" className='  bg-[#191919] placeholder:text-white rounded-xl w-full h-14 pl-6  outline-none border border-transparent focus:border-orange-500 ' placeholder='Name' />
                <input type="text" className='  bg-[#191919] placeholder:text-white rounded-xl w-full h-14 pl-6  outline-none border border-transparent focus:border-orange-500 ' placeholder='Email' />
                <textarea name="" className='  bg-[#191919] placeholder:text-white rounded-xl w-full h-52 pl-6 pt-3 outline-none border border-transparent focus:border-orange-500 ' placeholder='Message' id=""></textarea>
                <div className=' flex gap-3 items-center  '>
                    <div className=' h-8 w-8 rounded-full border-2 border-orange-500 flex justify-center items-center'>
                        <div className=' h-2 w-2 bg-orange-500 rounded-full'></div>
                    </div>
                    <p className=' text-white'>I accept your terms & conditions</p>
                </div>
                <button className=' relative   rounded-xl h-14 w-36 bg-orange-500 text-white  font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-orange-500 duration-300'>Sumbit Now</span>

  <div className='absolute inset-0 bg-white rounded-xl  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>

            </div>

        </div>
        <div>
            <div className=' md:h-[600px] h-[400px] pb-10'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13597.927820728059!2d74.283311555091!3d31.565828937087296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191cba0ea21c81%3A0xecb349ffcbf759a6!2sIslampura%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724263898302!5m2!1sen!2s" 
                width="100%" 
                 className=' h-full'
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Contact1
