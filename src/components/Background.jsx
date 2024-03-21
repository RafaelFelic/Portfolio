import React, { useState, useEffect } from 'react';

const Background = () => {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrolledPercentage = (scrollY / (docHeight - windowHeight)) * 100;

    let newScale = 1;
    if (scrolledPercentage <= 50) {
      newScale = 1 + (scrolledPercentage / 50) * 0.1;
    } else {
      newScale = 1.1 - ((scrolledPercentage - 50) / 50) * 0.1;
    }

    setScale(newScale);
  };

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScreenSize);

    // Run on mount to set initial value
    updateScreenSize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[url('/public/background.png')] bg-cover bg-no-repeat ${
        isMobile ? '' : 'md:bg-center'
      } mix-blend-hard-light opacity-10 md:opacity-5 z-[-1]`}
      style={{
        transform: `scale(${scale})`,
        ...(isMobile ? { backgroundPosition: '20% center' } : {}),
      }}
    ></div>
  );
};

export default Background;
