import React from 'react';

const Card3 = ({ Data }) => {
  return (
    
    <div className='relative  ' >
      <img src={Data.img4} alt="" className=' rounded-xl overflow-hidden ' />
      <div className='bg-black absolute inset-0 z-20 opacity-30 flex flex-col gap-16 justify-center'></div>
      <div className='absolute inset-0 flex flex-col  justify-center z-30 gap-10 px-8'>
        <div className='lg:h-[11vh] h-16  lg:w-[11vh] w-16 bg-white rounded-full mb-4 flex justify-center items-center text-orange-500 lg:text-xl text-lg font-semibold'>
          50%<br/>OFF
        </div>
        <div className=' flex flex-col items-start  gap-5 '>
          <h2 className=' text-start text-white lg:text-xl text-lg'>{Data.head3}</h2>
          <p className=' text-gray-300 text-start lg:text-base text-sm'>{Data.para2}</p>
          <button className=' relative  rounded-full h-12 w-32 bg-white text-orange-500 font-semibold overflow-hidden group'>
  <span className='relative z-10 group-hover:text-white duration-300'>Shop Now</span>

  <div className='absolute inset-0 bg-orange-500 rounded-full  -translate-y-full group-hover:translate-y-0  duration-300 '></div>

              </button>
        </div>
      </div>
    </div>
  );
}

export default Card3;