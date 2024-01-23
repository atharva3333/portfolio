const Experience = () => {
    // Placeholder experiences
    const experiences = [
        {
            title: "Full Stack Developer Intern",
            company: "wowwill.in",
            year: "2022 - Present",
            description: "Designed frontend screens using React and Tailwind CSS, ensuring a visually appealing and responsive user interface. Utilized the PERN stack (PostgreSQL, Express.js, React, Node.js) hosted on Azure for web development. Spearheaded the development of a comprehensive website capable of collecting user information and generating personalized PDF wills. Assumed full responsibility for every aspect of the user interface.",
          },
          {
            title: "Full Stack Developer Intern",
            company: "dframe.org",
            year: "2021 - 2022",
            description: "Leveraged React, TypeScript, and Material-UI to create dynamic user interfaces, enhance responsiveness, and streamline data input during the internship. Worked with the MERN stack (MongoDB, Express.js, React, Node.js) hosted on AWS. Developed an efficient KYC verification system for data and image management. Created an interface to connect web3 wallet Metamask using the WalletConnect library.",
          },
    ];
  
    return (
      <div className="container mx-auto">
        <div>
          <div className="border-b-8 border-y-[#5EEAD4] w-24 my-12"></div>
          <h1 className="sm:text-7xl text-5xl font-bold ">💪 Experience</h1>
          
          
          {experiences.map((experience, index) => (
            <div key={index} className="my-8 bg-white max-w-[600px] mx-auto text-black p-8 rounded-xl">
            <div className="flex items-center gap-8">
            <h2 className="text-3xl font-semibold">{experience.title}</h2>
            <div>
            <p className="text-gray-600">{experience.company}</p>
              <p className="text-gray-500">{experience.year}</p>
            </div>
              
            </div>
              
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Experience;
  