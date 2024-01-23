import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container lg:px-[20rem] mx-auto">
      <div className="flex items-center justify-center h-[80vh]">
        <div>
          <div className="border-b-8 border-y-[#5EEAD4] w-24 sm:mb-12 mb-6"></div>
          <h1 className="sm:text-7xl text-5xl font-bold leading-relaxed">
            👋Hi, I&apos;m{" "}
            <span className="text-[#5EEAD4]">
              <Typewriter
                options={{
                  strings: ["Atharva", "a Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mt-8 text-2xl max-w-[700px] text-slate-400 text-justify sm:leading-relaxed tracking-wider">
            I&rsquo;m a Full Stack Developer passionate about crafting robust
            and innovative solutions across the web development spectrum
          </p>
          
            <NavLink to="/projects" className="block w-full h-full">
            <button className="relative bg-[#5EEAD4] hover:scale-110  bg-opacity-10 text-[#5EEAD4] mt-12 font-bold px-14 py-8 rounded-[20px] text-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring focus:border-blue-300">
              Browse Portfolio
              </button>
            </NavLink>
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
