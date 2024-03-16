import useTextAnimation from '../utils/textAnimation';
import { SKILLS } from '../utils/data';

export default function Skills() {
  const sectionRef = useTextAnimation();

  return (
    <section
      id="skills"
      className="text-[#ddd] text-center textShadow mb-12"
      ref={sectionRef}
    >
      <h2 className="hide section font-[DOSfont] text-3xl md:text-5xl my-7 ">
        Skills and Power-ups
      </h2>
      <ul className="hide section flex flex-row flex-wrap justify-around items-center list-none max-w-[95%] mx-auto font-['Raleway']">
        {SKILLS.map((skill, index) => (
          <li key={index} className="flex flex-col items-center text-xs my-3">
            <img
              src={skill.image}
              className="w-[75px] h-[75px] md:w-[90px] md:h-[90px] p-2 mb-2 bg-[#eee] rounded-lg shadow-[2px_2px_0px_2px_#000]"
              alt={skill.name}
            />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
