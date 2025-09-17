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
      level: 100,
    },
    {
      name: "Typescript",
      icon: tspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 60,
    },
    {
      name: "React",
      icon: reactpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 95,
    },
    {
      name: "Next.js",
      icon: nextpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 70,
    },
    {
      name: "Tailwind",
      icon: tailwindpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 85,
    },
    {
      name: "Node JS",
      icon: nodejspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 85,
    },
    {
      name: "Express JS",
      icon: expresspng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 85,
    },
    {
      name: "Databases",
      icon: dbpng,
      color: "from-[hsl(0,0%,8%)] to-[hsl(0,0%,10%)]",
      level: 85,
    },
  ];
  return (
    <div>
      <section className="py-12 text-white mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${skill.color} p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform`}
            >
              <div className="flex ">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-cover rounded-lg bg-white"
                />
              </div>

              <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
