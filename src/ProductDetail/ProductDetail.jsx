import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { second } from '../Data';
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";


const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const product = second[id];

  // Increment counter
  const incrementCount = () => setCount(count + 1);

  // Decrement counter (but not below 0)
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className=''>
      <div className=' bg-black sm:px-14 px-5 py-20'>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-6'>
          <div className='  flex justify-center '>
            <img src={product.img2} alt={product.head2} className=' bg-[#191919]' />
          </div>
          <div className=' sm:space-y-5 space-y-3'>
            <h2 className=' text-orange-500 sm:text-2xl text-xl'>{product.head2}</h2>
            <div className='flex gap-1 text-yellow-600 sm:text-lg text-base '>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className=' text-white sm:text-4xl text-3xl font-semibold'>{product.para1}</p>
            <p className=' text-white sm:text-base text-sm'>Rapidiusly transform corporate expertise whereas enterprise-wide web services. Progressively whiteboard multifunctional networks for pandemic total linkage a Synergistically recaptiualize client and based methods of empowerment with sustainable bandwidth.

Progressively whiteboard multifunctional networks for pandemic total linkage a Synergistically recaptiualize client and based methods of empowerment with sustainable bandwidth.</p>
            <h2 className=' text-lg text-white'>Categories: <span className='text-sm'> Woman | Man | Kids | Accessories</span></h2>
            <h2 className=' text-white text-lg'>Tags: <span className='text-sm'> Fashion | Lifestyle | Travel | Video | Audio</span></h2>
            <h2 className=' text-white text-lg flex items-center'>Share: 
              <span>  
                <div className='flex '>
                  <div className='h-11 w-11 rounded-full hover:border-orange-500 hover:text-gray-500 duration-300 cursor-pointer text-orange-500 flex justify-center items-center text-lg'>
                    <FaFacebookF />
                  </div>
                  <div className='h-11 w-11 rounded-full hover:border-orange-500 hover:text-gray-500 duration-300 cursor-pointer text-orange-500 flex justify-center items-center text-lg'>
                    <FaTwitter />
                  </div>
                  <div className='h-11 w-11 rounded-full hover:border-orange-500 hover:text-gray-500 duration-300 cursor-pointer text-orange-500 flex justify-center items-center text-lg'>
                    <FaLinkedinIn />
                  </div>
                  <div className='h-11 w-11 rounded-full hover:border-orange-500 hover:text-gray-500 duration-300 cursor-pointer text-orange-500 flex justify-center items-center text-lg'>
                    <FaYoutube />
                  </div>
                </div>
              </span>
            </h2>
            <div className=' space-x-2'>
              <button className='h-10 w-12 rounded-lg border text-white' onClick={decrementCount}>-</button>
              <button className='h-10 w-12 rounded-lg border text-white'>{count}</button>
              <button className='h-10 w-12 rounded-lg border text-white' onClick={incrementCount}>+</button>
            </div>
            <div className=' flex justify-center pt-2'>
            <button className='relative rounded-full h-12 w-72 bg-white text-orange-500 font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Add To Cart</span>
  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>
</button>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
