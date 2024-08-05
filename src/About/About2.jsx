import React from 'react'
import { FaPlay } from "react-icons/fa";

const About2 = () => {
  return (
    <>
    <div className=' bg-black sm:px-14 px-5  pt-20'>
        <div className=' grid lg:grid-cols-2 gap-10'>
            <div className=' border-2 border-white relative '>

                <img src="../assets/img/about-image (1).jpg" alt="" />
                <div className=' h-24 w-24 bg-white rounded-full absolute inset-0  m-auto text-orange-500  flex justify-center items-center text-2xl'>
                <FaPlay />
                </div>
                 {/* Animated circles */}
      <div className='circle-animation absolute inset-0 m-auto w-24 h-24 rounded-full border border-white'></div>
      <div className='circle-animation absolute inset-0 m-auto w-24 h-24 rounded-full border border-white'></div>
      <div className='circle-animation absolute inset-0 m-auto w-24 h-24 rounded-full border border-white'></div>
            </div>
            <div className=' border-2 border-white flex flex-col  justify-center gap-12'>
                <h2 className=' text-4xl text-white font-bold'>We Are Here To Increase Your Modern Life</h2>
                <p className='  text-gray-300'>Sell Globally In Minutes With Localized Currencies Languages, And
                Experie In Every Market. Only A Variety Of Vaping Products Globally In With Localized Currencies
                 Languages Globally In With Localized Currencies Languages Lorem Ipsum Dolor Sit Amet Consectetur 
                 Adipisicing Elit. Neque Exercitationem Perspiciatis
                 Rem Sed Ipsum Assumenda Nemo Praesentium Blanditiis Tempora Consequuntur Cum Beatae Saepe Facere Quis Dolore Dignissimos Nihil.</p>
                 <button className=' h-12 w-40 text-sm  font-bold bg-orange-500 text-white rounded-full '>More About Us</button>
            </div>

        </div>
      
    </div>
    </>

  )
}

export default About2