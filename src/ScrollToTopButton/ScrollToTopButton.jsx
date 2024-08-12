import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolling(scrollY > 100); // Show the button after scrolling down 100px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-3  z-50 rounded-full border-2 border-orange-500 ${
        scrolling ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300  text-orange-500 shadow-lg`}
      aria-label="Scroll to Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
