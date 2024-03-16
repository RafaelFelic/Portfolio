import useTextAnimation from '../utils/textAnimation';
import Project from './Project';
import { PROJECTS } from '../utils/data';

export default function Portfolio() {
  const sectionRef = useTextAnimation();

  return (
    <div id="portfolio" className="portfolio" ref={sectionRef}>
      <h2 className="hide section font-[DOSfont] text-[#ddd] text-center text-5xl my-5 p-10 textShadow">
        Portfolio
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
