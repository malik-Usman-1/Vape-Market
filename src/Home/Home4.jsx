import React from 'react';
import Card2 from '../Cards/Card2';
import { second } from '../Data';
import { Link } from 'react-router-dom';

const Home4 = () => {
  return (
    <>
      <div className='bg-black space-y-14 pt-14 pb-14 sm:px-14 px-5'>
        <div className='md:flex space-y-6 md:space-y-0 items-center justify-between'>
          <div>
            <h2 className='text-white lg:text-5xl sm:text-3xl text-2xl'>Latest Arrival Products</h2>
          </div>
          <div className='flex gap-6'>
            <p className='text-white lg:text-base sm:text-sm text-[12px]'>Latest Item</p>
            <p className='lg:text-base sm:text-sm text-[12px] text-gray-400'>Top Ratting</p>
            <p className='lg:text-base sm:text-sm text-[12px] text-gray-400'>Featured Products</p>
          </div>
        </div>
        <div className='w-full border border-gray-800'></div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
  {second.map((ele, index) => (
    <div key={index}>
      <Link to={`/product/${index}`}>
        <Card2 Data={ele} />
      </Link>
    </div>
  ))}
</div>


      </div>
    </>
  );
};

export default Home4;
