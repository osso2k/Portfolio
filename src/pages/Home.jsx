import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import osso from "../assets/osso.jpeg";
import BlurText from "../Techs/BlurText";
import Skills from "../components/Skills";
import { motion as Motion } from "motion/react";

const Home = () => {
  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/ossoble-ali/", "_blank");
  };
  const github = () => {
    window.open("https://github.com/osso2k/", "_blank");
  };
  const mail = () => {
    const email = "ossoble817@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  const playPlaylist = () => {
    window.open(
      "https://open.spotify.com/playlist/4IrF58xDMKzcye13PuRq3H?play=true&shuffle=true",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex items-start bg-[hsl(0,0%,5%)]">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className=" grid grid-cols-2 md:flex flex-col md:flex-row items-center md:items-start rounded-xl p-4 border-black shadow-lg mt-10">
          <div className="flex flex-col flex-1 pt-6 md:pt-24 pr-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Welcome, I'm Ossoble! 👋
            </h1>
            <p className="text-sm md:text-base font-serif">Ankara, Türkiye</p>
            <div className="flex gap-2 pt-4 items-center">
              <img
                className="w-7 h-7 rounded cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={linkedIn}
                src={linkedinImg}
                alt="linkedin"
              />
              <img
                className="w-7 h-7 rounded cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={github}
                src={githubImg}
                alt="github"
              />
              <p
                className="text-sm pt-1 cursor-pointer bg-[hsl(0,0%,14%)] border border-[hsl(0,0%,15%)] shadow-lg hover:scale-105 transition duration-300 ease-in-out p-1 rounded-lg font-semibold"
                onClick={mail}
              >
                Contact me!
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-center md:ml-6">
            <Motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeOut" }}
              className="h-32 w-32 md:h-48 md:w-48 rounded-full object-cover"
              src={osso}
              alt="profile"
            />
            <button
              onClick={playPlaylist}
              className="mt-4 md:mt-6 px-3 py-2 bg-[hsl(0,0%,12%)] border-2 shadow-lg border-black hover:opacity-70 text-gray-300 font-semibold rounded-lg transition duration-300 ease-in-out"
            >
              music?
            </button>
          </div>
        </div>

        <div className="pt-4 mt-4 text-center ">
          <BlurText
            text="I'm a full-stack dev who loves to code and tackle tricky problems. I mostly work with the MERN and PERN stacks. I'm always working on improving my craft and I'm really excited to meet other developers, learn from the community, and maybe build something cool together!"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-sm md:text-lg lg:text-xl pl-2 "
          />
        </div>

        <div className="w-full mt-6">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Home;
