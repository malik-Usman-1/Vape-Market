import React from 'react'
import Card2 from '../Cards/Card2'
import { second } from '../Data'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Shop2 = () => {
  return (
    <div className='bg-black py-14 px-5 sm:px-14'>
      <div className='md:flex md:items-center md:justify-between space-y-6 md:space-y-0'>
        <div>
          <h2 className=' text-gray-400 text-sm sm:text-base '>
Showing 1–12 of 17 results</h2>
        </div>
        <div className='flex gap-6'>
          <p className='text-white text-xs sm:text-sm lg:text-base'>Latest Item</p>
          <p className='text-gray-400 text-xs sm:text-sm lg:text-base'>Top Rating</p>
          <p className='text-gray-400 text-xs sm:text-sm lg:text-base'>Featured Products</p>
        </div>
      </div>
      <div className='border-gray-800 border-t my-6 pb-10'></div>
      <div className='grid gap-6 lg:grid-cols-4 grid-cols-1'>
        <div className=''>
          <div className='bg-[#191919] rounded-xl grid grid-rows-2 gap-10 p-7'>
            <div className='border-b-2 pb-10 space-y-5'>
              <h2 className='text-white text-xl'>Special Offer</h2>
              <img src="../assets/img/coundown-image1.png" alt="Special Offer" className='w-full h-auto' />
              <h2 className='text-white text-lg hover:text-orange-500 cursor-pointer duration-300'>Mango Nic Salt E-Liquid</h2>
              <p className='text-gray-500 text-xl'>
                <del>$74.50</del> <span className='text-orange-500'>$49.50</span>
              </p>
              <div className='flex gap-1 text-yellow-600 text-lg'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className='space-y-5'>
              <img src="../assets/img/coundown-image2.png" alt="Special Offer" className='w-full h-auto' />
              <h2 className='text-white text-lg hover:text-orange-500 cursor-pointer duration-300'>Watermelon Nic Salt</h2>
              <p className='text-gray-500 text-xl'>
                <del>$74.50</del> <span className='text-orange-500'>$49.50</span>
              </p>
              <div className='flex gap-1 text-yellow-600 text-lg'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        <div className='  col-span-3 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid gap-6'>
  {second.map((ele, index) => (
    <div key={index}>
      <Link to={`/product/${index}`}>
        <Card2 Data={ele} />
      </Link>
    </div>
  ))}
</div>
      </div>
    </div>
  )
}

export default Shop2
