import React, { useEffect, useRef } from 'react';
import classes from '../components/Project.module.css';

export default function Project({ project, projectIndex, className }) {
  const scrollerRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleWindowScroll = () => {
    if (!window.isCustomScrollEnabled) return;

    const scrollY = window.scrollY;
    if (scrollY > lastScrollY.current) {
      scrollerRef.current.scrollLeft += 3;
    } else {
      scrollerRef.current.scrollLeft -= 3;
    }
    lastScrollY.current = scrollY;
  };

  useEffect(() => {
    window.isCustomScrollEnabled = true;
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  let imagesToDisplay = [project.image1, project.image2, project.image3];
  if (projectIndex === 1 || projectIndex === 2) {
    imagesToDisplay = imagesToDisplay.concat(imagesToDisplay);
  }

  return (
    <div
      className={`bg-black bg-opacity-40 shadow-black shadow-md rounded-3xl p-5 my-2 mx-2 md:mx-2.5 text-center ${className}`}
    >
      <div className={`${classes.scroller} flex flex-nowrap`} ref={scrollerRef}>
        {imagesToDisplay.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            className={`m-1 ${
              projectIndex === 1
                ? 'w-1/3 md:1/4 mx-5 rounded-2xl shadow-md shadow-black'
                : projectIndex === 2
                ? 'w-2/3 h-auto md:w-1/2 object-contain'
                : 'w-2/3 md:w-1/2'
            }`}
          />
        ))}
      </div>

      <h3 className="text-white mt-3 text-base md:text-lg">{project.title}</h3>
      <p className="m-2.5 p-2.5 md:mx-10 text-[#bbb] text-xs md:text-base">
        {project.description}
      </p>
      <a
        className="text-cyan-300 text-[0.8rem] font-bold p-2.5 m-2.5 rounded-full no-underline hover:text-black hover:bg-cyan-300"
        href={project.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Live
      </a>
    </div>
  );
}
