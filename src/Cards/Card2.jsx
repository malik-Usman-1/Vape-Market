import React from 'react';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Card2 = ({ Data }) => {
  return (
    <div className='border-2 border-gray-400 space-y-8 rounded-xl overflow-hidden group pt-7 transform transition-transform duration-500 hover:-translate-y-2'>
      <div className='px-8 space-y-6'>
        <div className='relative h-64'> {/* Fixed height container */}
          <img src={Data.img2} alt="" className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0' />
          <img src={Data.img3} alt="" className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100' />
        </div>
        <h2 className='text-white text-xl'>{Data.head2}</h2>
        <p className='text-gray-500  text-xl'>
          <del>$74.50</del> <span className='text-orange-500'>{Data.para1}</span>
        </p>
        <div className='flex gap-1 text-yellow-600 text-lg'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className='relative'>
        <button className='relative z-10 flex gap-2 items-center justify-center border-t-2 border-gray-400 group p-5 w-full bg-transparent'>
          <MdOutlineLocalGroceryStore className='text-xl text-orange-600 group-hover:text-white ' />
          <h2 className='text-white text-base '>Add To Cart</h2>
        </button>
        <div className='absolute inset-0 flex'>
          <div className='w-1/2 h-full bg-orange-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0'></div>
          <div className='w-1/2  h-full bg-orange-600 transition-transform duration-500 transform translate-x-full group-hover:-translate-x-0'></div>
        </div>
      </div>
    </div>
  );
};

export default Card2;