import useTextAnimation from '../utils/textAnimation';
import Project from './Project';
import { PROJECTS } from '../utils/data';

export default function Portfolio() {
  const sectionRef = useTextAnimation();

  return (
    <div id="portfolio" className="portfolio" ref={sectionRef}>
      <h2 className="hide section text-3xl md:text-4xl my-7 pt-5 text-black text-center">
        Some of my projects
      </h2>
      {PROJECTS.map((project, index) => (
        <Project
          className="hide section"
          key={index}
          project={project}
          projectIndex={index}
        />
      ))}
    </div>
  );
}
