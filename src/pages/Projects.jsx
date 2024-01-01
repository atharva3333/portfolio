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
          <div key={index}>
          <NavLink to={project.link}>
            <img
              className="w-[85%] mx-auto rounded-3xl mb-24 hover:scale-105 duration-300 ease-in-out"
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
