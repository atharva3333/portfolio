const Experience = () => {
    // Placeholder experiences
    const experiences = [
        {
            title: "Full Stack Developer Intern",
            company: "wowwill.in",
            year: "Mar 23 - Present",
            description: "Designed frontend screens using React and Tailwind CSS, ensuring a visually appealing and responsive user interface. Utilized the PERN stack (PostgreSQL, Express.js, React, Node.js) hosted on Azure for web development. Spearheaded the development of a comprehensive website capable of collecting user information and generating personalized PDF wills. Assumed full responsibility for every aspect of the user interface.",
          },
          {
            title: "Full Stack Developer Intern",
            company: "dframe.org",
            year: "Dec 2022 - Mar 2023",
            description: "Leveraged React, TypeScript, and Material-UI to create dynamic user interfaces, enhance responsiveness, and streamline data input during the internship. Worked with the MERN stack (MongoDB, Express.js, React, Node.js) hosted on AWS. Developed an efficient KYC verification system for data and image management. Created an interface to connect web3 wallet Metamask using the WalletConnect library.",
          },
    ];
  
    return (
      <div className="container mx-auto">
        <div>
          <div className="border-b-8 border-y-[#5EEAD4] w-24 my-12"></div>
          <h1 className="sm:text-7xl text-5xl font-bold mb-20">💪 Experience</h1>
          
          
          {experiences.map((experience, index) => (
            <div key={index} className="my-12 bg-[#5EEAD4] bg-opacity-10 text-[#5EEAD4] max-w-[800px] mx-auto p-8 rounded-xl">
            <div className="flex items-center justify-between gap-8">
            <h2 className="text-3xl font-semibold">{experience.title}</h2>
            <div>
            <p className="font-bold">{experience.company}</p>
              <p className="font-bold">{experience.year}</p>
            </div>
              
            </div>
              
              <p className="mt-2 text-slate-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Experience;
  