import React from 'react';
import { useState } from 'react';
import { LuStore } from "react-icons/lu";
import { PiShippingContainerBold } from "react-icons/pi";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { MdOutlineAccountCircle, MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai';





const countries = [
  { name: 'Pakistan', flag: '../assets/img/images-removebg-preview.png' },
  { name: 'Phalastine', flag: '../assets/img/istockphoto-865196128-612x612-removebg-preview.png' },
  { name: 'Turkey', flag: '../assets/img/images__1_-removebg-preview.png' },
];

function Nav() {
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownVisible(false);
  };
  const handleclose = () =>{
    setIsCenterModalOpen(!isCenterModalOpen)
  }

  return (
    <div className=" sticky top-0 bg-black z-30  ">
      <div className='grid grid-cols-2  py-3'>
        <div className='flex items-center justify-center sm:gap-28 gap-10'>
          <Link to='/'>
          <img src="../assets/img/logo (4).svg" alt="" className='sm:hidden h-9 w-24' />
          <img src="../assets/img/logo (6).svg" alt="" className='sm:block hidden' />
          </Link>
         
          <input type="text" name="" id="" className='h-14 w-96 rounded-full pl-16 relative outline-none hidden lg:block' placeholder='Search For' />
          <FaSearch className='lg:absolute -ml-4 text-xl text-orange-500' />
        </div>
        <div className='flex items-center justify-end lg:pr-16 pr-3 gap-2'>
          <div className='rounded-full bg-white flex overflow-hidden'>
            <div className='bg-orange-500 md:p-3 p-1'>
              <MdOutlineAccountCircle className='text-xl text-white' />
            </div>
            <div className='p-3 hidden lg:block'>
              <h2>My Account</h2>
            </div>
          </div>
          <div className='rounded-full bg-white flex overflow-hidden'>
            <div className='flex items-center gap-5 md:p-3 p-1'>
              <MdOutlineLocalGroceryStore className='text-xl text-orange-500' />
              <h2 className='text-black sm:text-lg text-sm hidden sm:block'>$0.00</h2>
            </div>
            <div className='p-3 bg-black hidden md:block'>
              <h2 className='text-xl text-white'>0</h2>
            </div>
          </div>
          <div className='relative rounded-full bg-white flex'>
            <div className='md:p-2 p-1 flex items-center sm:gap-5 gap-1'>
              <img src={selectedCountry.flag} alt={selectedCountry.name} className='md:h-12 h-5 md:w-12 w-5' />
              <h2 className='md:text-base text-sm'>{selectedCountry.name}</h2>
            </div>
            <div className="md:p-2 p-1 flex items-center cursor-pointer" onClick={toggleDropdown}>
              <FaAngleDown />
            </div>
            {dropdownVisible && (
              <div
                className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg py-2 z-20 w-36 transition-opacity duration-300"
                initial={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -10 }}
              >
                {countries.map((country) => (
                  <li
                    key={country.name}
                    className="px-2 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
                    onClick={() => selectCountry(country)}
                  >
                    <img src={country.flag} alt='' className="inline mr-2 h-12 w-12" />
                    {country.name}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='  bg-[#191919]   items-center    grid grid-cols-2'>
        <div className='  pl-4 sm:pl-0   '>

      
          
          <button onClick={() => setIsCenterModalOpen(!isCenterModalOpen)} className='  lg:hidden xl:hidden h-12 text-3xl sm:flex flex  sm:justify-center sm:items-center  md:flex justify-center items-center w-14  text-white'>
              { isCenterModalOpen ?  <AiOutlineClose /> :
                 <BiMenuAltLeft /> 
                
              }  
                
              </button>
             
              {isCenterModalOpen && (
                <div className=' absolute top-24 left-0 right-0 bottom-0  h-72  bg-[#191919] p-6 shadow-lg overflow-y-auto z-50'>
                  <ul className=' text-white text-2xl space-y-5'>
                  <Link to='/'
                  onClick={handleclose}
                 >
              <li>Home</li>
              </Link>
                  <Link to='/about'
                  onClick={handleclose}   
          >
          <li>About Us</li>
          </Link>
          <Link to='/shop'
                  onClick={handleclose} 
                  > 
              <li>Shop</li>
              
          </Link>

              <li>Blog</li>
              <li>Contact Us</li>
                  </ul>
                 

          

        </div>

                      )}
            <ul className='lg:flex text-white gap-12  pt-4  pl-16 items-center  hidden '>
              <Link to='/'
                 >
              <li>Home</li>
              </Link>

              <Link to='/about'
          
              >
              <li>About Us</li>
              </Link>
              <Link to='/shop'>

              <li>Shop</li>
              </Link>
              <Link to='blog'>

              <li>Blog</li>
              </Link>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=' md:flex justify-end lg:pr-16 pr-3 gap-10  hidden'>
            <div className='flex items-center gap-5'>
              <div><LuStore className='text-white text-4xl' /></div>
              <div>
                <h2 className='text-gray-300 lg:text-base text-sm'>Picking Up?</h2>
                <p className='text-white lg:text-base text-sm'>Store One</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <div><PiShippingContainerBold className='text-white text-4xl' /></div>
              <div>
                <h2 className='text-gray-300 lg:text-base text-sm '>Free Shipping</h2>
                <p className='text-white lg:text-base text-sm'>On Order Over $100</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Nav;
