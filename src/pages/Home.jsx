import React from "react";
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import osso from "../assets/osso.jpeg";
import BlurText from "../Techs/BlurText";
import Skills from "../components/Skills";
import Projects from "./Projects";

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
    <div>
      <div className="flex flex-col w-[40%] h-screen max-h-screen  mx-auto mt-[100px] rounded-xl p-2  border-black shadow-lg">
        <div className="flex pt-10 gap-24 pl-2">
          <div className="flex flex-col pt-24 ">
            <h1 className="text-2xl font-semibold">Welcome ,Im Ossoble!👋</h1>
            <p className="text-sm font-serif">Ankara,Türkiye</p>
            <div className="flex gap-2 pt-4">
              <img
                className="w-7 h-7 rounded cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={linkedIn}
                src={linkedinImg}
                alt="no"
              />
              <img
                className="w-7 h-7 rounded cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                onClick={github}
                src={githubImg}
                alt=""
              />
              <p
                className="text-sm pt-2 cursor-pointer bg-[hsl(0,0%,14%)] border border-[hsl(0,0%,15%)] shadow-lg hover:scale-105 transition duration-300 ease-in-out p-1 rounded-lg font-semibold mt-[-2px]"
                onClick={mail}
              >
                Contact me!
              </p>
            </div>
          </div>
          <img
            className="h-48 w-48 rounded-full object-cover"
            src={osso}
            alt=""
          />
          <button
            onClick={playPlaylist}
            className="flex px-2 py-1 max-h-40 my-auto mb-8 bg-[hsl(0,0%,12%)] border-2 shadow-lg border-black  hover:opacity-30 text-gray-500 font-semibold rounded-lg transition duration-300 ease-in-out"
          >
            music?
          </button>
        </div>
        <div className="pt-4 mt-4 text-right">
          <BlurText
            text="I'm a full-stack dev who loves to code and tackle tricky problems. I mostly work with the MERN and PERN stacks. I'm always working on improving my craft and I'm really excited to meet other developers, learn from the community, and maybe build something cool together!"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-[15px] pl-2 font-semibold"
          />
        </div>
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
