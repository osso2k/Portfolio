import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import osso from "../assets/osso.jpeg";
import BlurText from "../Techs/BlurText";
// import Skills from "../components/Skills";
import { motion as Motion } from "motion/react";
import Projects from "../components/Projects";
import jojo from "../assets/jojo.png";
import tbc from "../assets/tobecont.png";

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

  // const playPlaylist = () => {
  //   window.open(
  //     "https://open.spotify.com/playlist/4IrF58xDMKzcye13PuRq3H?play=true&shuffle=true",
  //     "_blank"
  //   );
  // };

  return (
    <div className="min-h-screen flex flex-col items-start">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className=" grid grid-cols-2 md:flex flex-col md:flex-row items-center md:items-start rounded-xl p-4 border-black shadow-lg mt-10">
          <div className="flex flex-col flex-1 pt-6 md:pt-24 pr-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
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

          <div className="relative flex items-center md:items-center md:ml-6">
              <Motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeOut" }}
                className="h-36 w-36 md:h-52 md:w-52 rounded-full object-cover"
                src={osso}
                alt="profile"
              />

              <img
                className="absolute -top-36 left-16  md:left-28 w-40 h-52 object-cover "
                src={jojo}
                alt="jojo overlay"
              />
            </div>
        </div>

        <div className="pt-4 mt-4 text-center ">
          <BlurText
            text="I like coding and programming, and I mostly work with TypeScript and Python. I try to code most of the time because I genuinely enjoy learning and building things. I also enjoy chess, football, and basketball. Lately, I want to get into competitive programming to improve my problem-solving skills even more. My goal is to eventually work at a top-tier firm and reach my full potential."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-md md:text-lg lg:text-xl pl-2 "
          />
        </div>

      </div>
        <div className="max-w-full mt-6">
          {/* <Skills /> */}
          <Projects />
        </div>
        <div className="flex w-full my-16 ">
        <img className="flex ml-[70%] object-cover bg-opacity-30 justify-center items-center rounded-xl  w-[40%] h-32 " src={tbc} alt="" />
        </div>
    </div>
  );
};

export default Home;
