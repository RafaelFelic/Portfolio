import useTextAnimation from '../utils/textAnimation';
import { scrollToSection } from '../utils/scroll';

export default function About() {
  const sectionRef = useTextAnimation();

  return (
    <section
      id="about"
      className="max-w-[780px] mx-auto p-5 md:p-12 px-6 text-sm md:text-lg text-[#ddd] md:leading-[2.4rem] font-['Raleway'] overflow-hidden textShadow"
      ref={sectionRef}
    >
      {/* <h2 className="hide section">About Me</h2> */}
      <p className="hide section mb-5">
        Hello, I'm Rafael Feliciano, a self-taught and enthusiastic Front-End
        Developer with a passion for technological innovation. My expertise lies
        in developing visually appealing, user-friendly interfaces using the
        latest technologies. I'm dedicated to lifelong learning and applying
        creative solutions to technical challenges.
      </p>
      <p className="hide section mb-12">
        My hobbies, including surfing, exploring, and playing guitar, enhance my
        creative problem-solving abilities, crucial in the tech industry.
        Currently freelancing, I'm actively seeking new opportunities to
        contribute my skills to dynamic teams or projects. If you're looking for
        an enthusiastic developer who merges technical know-how with creativity.{' '}
        <button
          onClick={() => scrollToSection('contact')}
          className="text-cyan-200 hover:text-yellow-400"
        >
          Let's connect!
        </button>
      </p>
    </section>
  );
}
