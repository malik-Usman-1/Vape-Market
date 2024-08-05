import React from 'react'

const Home5 = () => {
  return (
   <>
   <div>
    <div className=' Home5  grid lg:grid-cols-2 grid-cols-1 sm:px-14 px-5 gap-12 pb-8 lg:pb-0'>
        <div  className=' flex justify-center'>
            <img src="../assets/img/discount-image2 (1).png" alt="" />
        </div>
        <div className=' flex flex-col  sm:gap-10 gap-5 justify-center'>
            <h2  className=' sm:text-4xl text-2xl text-white font-bold'>Find Your Best Favourite</h2>
            <p className=' text-gray-300 sm:text-base text-sm'>Sell Globally In Minutes With Localized Currencies Languages, And Experie In Every Market. Only A Variety Of Vaping Products</p>
            <div className=' sm:flex  space-y-4 sm:space-y-0   w-max items-center  gap-1'>
            <button className='rounded-full h-12 w-36   bg-orange-600  text-white font-bold'>Shop Now</button>
            <button className='rounded-full h-12  w-60 border-2 border-gray-800  flex items-center gap-2 justify-center  '>
            <img src="../assets/img/fire.svg" alt="" />
            <h2 className='text-lg text-white font-bold'>GET <span className='text-orange-500'>25% OFF</span> NOW</h2>
            </button>
            </div>
          
        </div>
    </div>
   </div>
   </>
  )
}

export default Home5