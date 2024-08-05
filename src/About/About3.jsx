import React from 'react'

const About3 = () => {
  return (
    <>
    <div className='  About3  sm:px-14 px-5 py-36'>
     <div className=' grid md:grid-cols-2 lg:grid-cols-4   grid-cols-1 gap-8 '>
        <div className='  border-2 border-white flex flex-col  justify-center gap-16'>
            <div className=' flex items-center gap-4'>
                <div className=' h-20 w-20 border rounded-full flex justify-center items-center'>
                    <img src="../assets/img/feature-icon1 (1).png" alt="" />
                </div>
                <div>
                    <h2 className=' text-white text-2xl'>Free Delivery</h2>
                    <p className='  text-gray-300 text-sm'>For All Orders Above $45</p>
                </div>
            </div>
            <div className=' flex items-center gap-4'>
                <div className=' h-20 w-20 border rounded-full flex justify-center items-center'>
                    <img src="../assets/img/feature-icon2 (1).png" alt="" />
                </div>
                <div>
                    <h2 className=' text-white text-2xl'>Secure Payments</h2>
                    <p className='  text-gray-300 text-sm'>Confidence On All Your Devices</p>
                </div>
            </div>
        </div>
        <div className=' hidden  lg:block border-2 border-white col-span-2 relative'>
            <img src="../assets/img/service-image (1).png" alt="" />
            <div className=' absolute inset-0  border-2 border-white flex justify-center items-center'>
                <h2 className=' text-5xl text-white text-center'>Sign Up & Save 25%</h2>
            </div>
        </div>
        <div className='  border-2 border-white flex flex-col  justify-center gap-16'>
        <div className=' flex items-center gap-4'>
                <div className=' h-20 w-20 border rounded-full flex justify-center items-center'>
                    <img src="../assets/img/feature-icon3 (1).png" alt="" />
                </div>
                <div>
                    <h2 className=' text-white text-2xl'>Top-Notch Support</h2>
                    <p className='  text-gray-300 text-sm'>Sayhello&Gazacom</p>
                </div>
            </div>
            <div className=' flex items-center gap-4'>
                <div className=' h-20 w-20 border rounded-full flex justify-center items-center'>
                    <img src="../assets/img/feature-icon4 (1).png" alt="" />
                </div>
                <div>
                    <h2 className=' text-white text-2xl'>180 Days Return</h2>
                    <p className='  text-gray-300 text-sm'>Money Back Guranry</p>
                </div>
            </div>
        </div>


         </div>
      
    </div>
    </>

  )
}

export default About3