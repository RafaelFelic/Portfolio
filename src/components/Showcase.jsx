import useTextAnimation from '../utils/textAnimation';

export default function Showcase() {
  const sectionRef = useTextAnimation();

  return (
    <div ref={sectionRef} className="h-screen flex flex-col md:flex-row">
      <section className="block md:inline-block md:m-auto pr-5 my-8 md:ml-12 w-full md:w-[50%] text-3xl md:text-4xl text-right md:text-left">
        <div>
          <p className="hide fromleft mb-3 md:mb-8">Welcome!</p>
          <p className="hide fromleft mb-2 md:mb-6">
            I am{' '}
            <span className="text-gray-300 text-4xl md:text-5xl">
              Rafael Feliciano
            </span>
            ,
          </p>
          <div className="typing-effect-wrapper">
            <p className="text-xl md:text-4xl md:w-[85%] w-full text">
              Front-End Developer
            </p>
          </div>
        </div>
      </section>

      <section className="md:w-[50%] w-[85%] mx-auto md:m-auto md:mr-12 text-md md:text-xl bg-gray-400 text-black p-2.5 shadow-[20px_20px_0px_2px_#000] hide fromright">
        <div className="p-2.5 skills">
          <p className="text-xl md:text-3xl md:mb-8">skills &#123;</p>
          <p className="mb-5">profession: Front-End Developer,</p>
          <p>
            technologies: HTML, CSS(including Bootstrap, Sass, Tailwind CSS),
            JavaScript, React, TypeScript, Next.js, Adobe Products &#125;;
          </p>
        </div>
        <div className="mt-2.5 p-2.5 work">
          <p className="text-xl md:text-3xl md:mb-8">work &#123;</p>
          <p className="mb-5">currentJob: Freelancer,</p>
          <p>
            aboutMe: I'm a self-taught Front-End Developer, passionate about
            turning challenges into user-friendly digital solutions through
            code. &#125;;
          </p>
        </div>
      </section>
    </div>
  );
}
