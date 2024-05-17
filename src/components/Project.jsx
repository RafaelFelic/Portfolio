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

  let imagesToDisplay = [project.image1, project.image2, project.image3].filter(
    Boolean
  );
  if (project.image4) {
    imagesToDisplay.push(project.image4);
  }
  if (projectIndex === 1 || projectIndex === 2) {
    imagesToDisplay = imagesToDisplay.concat(imagesToDisplay);
  }

  return (
    <div className={`max-w-[950px] mx-1 md:mx-auto mb-20 ${className}`}>
      <div className={`${classes.scroller} flex flex-nowrap`} ref={scrollerRef}>
        {imagesToDisplay.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            className={`m-1 ${
              projectIndex === 1 || projectIndex === 2
                ? 'w-1/3 md:w-1/4 mx-5 rounded-2xl shadow-md shadow-black'
                : projectIndex === 3
                ? 'w-1/2 md:w-1/2 my-auto'
                : 'w-2/3 md:w-1/2'
            }`}
          />
        ))}
      </div>

      <h3 className="text-black mt-3 mx-3 text-base font-bold md:text-lg">
        {project.title}
      </h3>
      <p className="mx-2 md:m-3 text-[#222] text-xs md:text-base font-semibold">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center justify-center mt-3">
        {project.projectUrl ? (
          <a
            className="text-[#4169E1] bg-gray-300 text-[0.8rem] font-bold p-2.5 rounded-xl no-underline hover:text-gray-300 hover:bg-[#4169E1]"
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Live
          </a>
        ) : (
          <span className="text-[#4169E1] bg-gray-300 text-[0.8rem] font-bold p-2.5 rounded-xl">
            Working in progress...
          </span>
        )}
      </div>
    </div>
  );
}
