import React from "react";
import jspng from "../assets/js.png";
import tspng from "../assets/ts.png";
import reactpng from "../assets/react.png";
import nextpng from "../assets/nextjs.png";
import tailwindpng from "../assets/tailwind.png";
import nodejspng from "../assets/nodejspng.png";
import expresspng from "../assets/express.png";
import dbpng from "../assets/db.png";

const Skills = () => {
  const skills = [
    {
      name: "Javascript",
      icon: jspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
    {
      name: "Typescript",
      icon: tspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
    {
      name: "React",
      icon: reactpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
    {
      name: "Next ",
      icon: nextpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
    {
      name: "Tailwind",
      icon: tailwindpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
    {
      name: "Node JS",
      icon: nodejspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
    {
      name: "Express",
      icon: expresspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)] ",
    },
    {
      name: "Databases",
      icon: dbpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
    },
  ];
  return (
    <div>
      <section className="py-12 text-white mt-24">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center h-40 sm:h-44 md:h-48 p-4 sm:p-6 rounded-2xl   shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-black"
            >
              <div className="flex items-center justify-center flex-1 w-full mb-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg border border-black"
                />
              </div>

              <h3 className="text-xs sm:text-sm md:text-base font-bold text-center leading-tight truncate w-full">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
