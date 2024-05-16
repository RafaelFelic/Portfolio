import useTextAnimation from '../utils/textAnimation';
import { SKILLS } from '../utils/data';

export default function Skills() {
  const sectionRef = useTextAnimation();

  return (
    <section
      id="skills"
      className="text-black text-center mb-12 p-1 max-w-[1200px] w-full mx-auto"
      ref={sectionRef}
    >
      <h2 className="hide section text-3xl md:text-4xl my-7">
        Skills and Power-ups
      </h2>
      <ul className="hide section grid grid-cols-5 md:grid-cols-10 list-none font-['Raleway'] gap-2 mx-1 md:mx-5 xl:mx-12">
        {SKILLS.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col items-center text-xs lg:text-sm my-2"
          >
            <img
              src={skill.image}
              className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 p-1 mb-2 bg-[#ddd] rounded-lg shadow-[2px_2px_0px_2px_#000] object-contain"
              alt={skill.name}
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
