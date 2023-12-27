import Atharva from "../assets/atharva.png";
// import { NavLink } from "react-router-dom";
// import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse items-start lg:flex-row gap-10 my-24 justify-evenly">
        <img className="rounded lg:w-[35%]" src={Atharva} alt="Atharva-img" />
        <div>
          <div className="border-b-8 border-y-[#5EEAD4] w-24 mb-12"></div>
          <h1 className="text-7xl font-bold ">👀About me</h1>
          <p className="max-w-[600px] text-justify mt-12 tracking-wider leading-relaxed text-2xl text-slate-400">
            Yo, I&apos;m a Engineering undergrad from India . I&apos;m all about
            codes, chess, and chilling with my dog, Mani! I&apos;m into stocks
            and try to make sense of them. When things get too techy, I chill
            with some meditation vibes.. Oh, and anime? One Piece is my jam!
            Coding, Meditating, chess, and a dash of anime – that&apos;s my kind
            of vibe! 🚀
          </p>
          <a target="blank" href="https://atharva3333.github.io/Atharva-Portfolio/resume/Atharva_Deshpande_Resume.pdf" className="block w-full h-full">
            <button className="relative bg-[#5EEAD4] bg-opacity-10 text-[#5EEAD4] mt-12 font-bold px-14 py-6 rounded-[20px] text-xl overflow-hidden hover:scale-110 transition duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring focus:border-blue-300">
            resumé
              </button>
            </a>

          {/* <p className="text-slate-600 text-5xl mt-4">
            <Typewriter
              options={{
                strings: [
                  "  Lover of Humor 😄",
                  " ‍️ Love to Meditation 🧘",
                  "  Devourer of Non-Fiction 📚",
                  "  Chess Strategist ♟️",
                  "  Stock Market Aficionado 📈",
                  "  Anime Enthusiast 🎌",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
