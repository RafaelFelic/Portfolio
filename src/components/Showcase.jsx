import useTextAnimation from '../utils/textAnimation';

export default function Showcase() {
  const sectionRef = useTextAnimation();

  return (
    <div
      ref={sectionRef}
      className="md:h-screen flex flex-col md:flex-row md:justify-evenly xl:p-12 items-center max-w-[1200px] w-full mx-auto"
    >
      <section className="mr-12 md:ml-12 mt-12 mb-10 md:my-auto w-full md:w-[55%]  text-2xl md:text-3xl lg:text-4xl text-right md:text-left font-semibold">
        <div>
          <p className="hide fromleft mb-3 md:mb-6">Welcome!</p>
          <p className="hide fromleft mb-1 md:mb-3">
            I am{' '}
            <span className="text-[#4169E1] text-3xl md:text-4xl lg:text-5xl">
              Rafael Feliciano
            </span>
            ,
          </p>
          <div className="typing-effect-wrapper">
            <p className="text-xl md:text-2xl lg:text-3xl w-full text">
              Front-End Developer
            </p>
          </div>
        </div>
      </section>

      <section className="w-[85%] md:w-[45%]  md:mr-12 text-base lg:text-lg bg-[#95AADD] rounded-3xl text-black p-2.5 shadow-[15px_15px_0px_0px_#222] hide fromright landscape small-screen">
        <div className="p-2.5 skills">
          <p className="text-xl md:text-3xl mb-2 md:mb-3 ">skills &#123;</p>
          <p className="mb-2 md:mb-4">
            <span className="font-semibold">profession:</span> Front-End
            Developer,
          </p>
          <p>
            <span className="font-semibold">technologies:</span> HTML,
            CSS(including Bootstrap, Sass, Tailwind CSS), JavaScript, React,
            React Native, TypeScript, Next.js, Adobe Products &#125;;
          </p>
        </div>
        <div className="mt-2.5 p-2.5 work">
          <p className="text-xl md:text-3xl mb-2 md:mb-3 ">work &#123;</p>
          <p className="mb-2 md:mb-4">
            <span className="font-semibold">currentJob:</span> Freelancer,
          </p>
          <p>
            <span className="font-semibold">aboutMe:</span> I'm a self-taught
            Front-End Developer, passionate about turning challenges into
            user-friendly digital solutions through code. &#125;;
          </p>
        </div>
      </section>
    </div>
  );
}
