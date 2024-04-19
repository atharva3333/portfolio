import { NavLink } from "react-router-dom";
import projectData from "../data.json";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="border-b-8 border-y-[#5EEAD4] w-24 my-12"></div>
        <h1 className="sm:text-7xl text-5xl font-bold ">🎨My Portfolio</h1>
      </div>

      <div className="mt-24">
        {projectData.map((project, index) => (
          <div key={index} className="grid sm:grid-cols-2 grid-cols-1 items-center">
          <div className="flex flex-col gap-4 items-center sm:items-baseline">
          <h1 className="font-black text-5xl">{project.title}</h1>
          <p className="text-2xl text-gray-500 mt-4">{project.description}</p>
          <NavLink  to={project.link} className="bg-[#5EEAD4] hover:scale-110 mt-1 w-[250px] text-center  bg-opacity-10 text-[#5EEAD4] font-bold px-14 py-8 rounded-[20px] text-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring focus:border-blue-300">View Project</NavLink>
          </div>
          
          <NavLink to={project.link}>
            <img
              className="sm:w-[600px] sm:mt-0 mt-8 sm:px-0 px-8 w-full mx-auto rounded-3xl sm:mb-24 mb-12 hover:scale-105 duration-300 ease-in-out"
              src={project.imagePath}
              alt={project.imagePath}
            />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
