import classes from '../components/Project.module.css';

export default function Project({ project, projectIndex, className }) {
  return (
    <div
      className={`font-['Raleway'] pb-[100px] my-2 mx-2 md:mx-2.5 text-center ${className}`}
    >
      <div
        className={classes.scroller}
        data-animated="true"
        data-direction={project.dataDirection}
      >
        <div className={`${classes.scroller_inner} flex flex-nowrap`}>
          {[project.image1, project.image2, project.image3].map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 1}`}
                className={`relative m-1 ${
                  projectIndex === 0
                    ? 'md:w-1/2'
                    : projectIndex === 1
                    ? 'w-1/2 md:w-[30%]'
                    : 'w-1/2'
                } ${projectIndex === 2 ? 'w-auto h-auto md:h-[350px]' : ''}`}
                style={{
                  ...(projectIndex === 1 && { right: '-200px' }),
                  ...(projectIndex === 2 && { left: '-500px' }),
                }}
              />
            )
          )}
        </div>
      </div>
      <h3 className="text-[#fff] mt-3">{project.title}</h3>
      <p className="m-2.5 mx-0 px-0 md:mx-10 p-2.5 text-[#ccc] text-xs md:text-lg">
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
