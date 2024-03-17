import useTextAnimation from "../utils/textAnimation";
import { SKILLS } from "../utils/data";

export default function Skills() {
  const sectionRef = useTextAnimation();

  return (
    <section
      id="skills"
      className="text-[#ddd] text-center textShadow mb-12 p-1"
      ref={sectionRef}
    >
      <h2 className="hide section font-[DOSfont] text-3xl md:text-5xl my-7">
        Skills and Power-ups
      </h2>
      <ul className="hide section grid grid-cols-5 md:grid-cols-10 list-none font-['Raleway'] gap-1 mx-1 md:mx-8 lg:mx-12">
        {SKILLS.map((skill, index) => (
          <li key={index} className="flex flex-col items-center text-xs my-2">
            <img
              src={skill.image}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-20 xl:h-20 p-1 mb-2 bg-[#eee] rounded-lg shadow-[2px_2px_0px_2px_#000] object-contain"
              alt={skill.name}
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
