import React, { useState, useEffect } from 'react';

const Background = () => {
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrolledPercentage = (scrollY / (docHeight - windowHeight)) * 100;

    let newScale = 1;
    if (scrolledPercentage <= 50) {
      newScale = 1 + (scrolledPercentage / 50) * 0.1; // Up to 10% bigger in the first half
    } else {
      newScale = 1.1 - ((scrolledPercentage - 50) / 50) * 0.1; // Then back to original size
    }

    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[url('/public/background.png')] bg-cover bg-no-repeat md:bg-center mix-blend-hard-light opacity-5 z-[-1] "
      style={{ transform: `scale(${scale})`, backgroundPosition: 'center' }}
    ></div>
  );
};

export default Background;
