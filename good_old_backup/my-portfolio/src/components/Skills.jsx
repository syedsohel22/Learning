import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-5">Skills</h2>
        <div className="flex justify-center space-x-5 px-5">
          <SkillCard
            src="https://img.icons8.com/color/480/html-5--v1.png"
            alt="HTML"
            name="HTML"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/css3.png"
            alt="CSS"
            name="CSS"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/javascript--v1.png"
            alt="JavaScript"
            name="JavaScript"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/react-native.png"
            alt="React"
            name="React"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/chakra-ui.png"
            alt="Chakra UI"
            name="Chakra UI"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/redux.png"
            alt="Redux"
            name="Redux"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/nodejs.png"
            alt="Node.js"
            name="Node.js"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/express-js.png"
            alt="Express.js"
            name="Express.js"
          />
          <SkillCard
            src="https://img.icons8.com/color/96/mongodb.png"
            alt="MongoDB"
            name="MongoDB"
          />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ src, alt, name }) => {
  return (
    <div className="skills-card flex flex-col items-center">
      <div className="border border-black rounded-md p-3 text-center min-w-[120px] transition-transform hover:scale-105">
        <img src={src} alt={alt} className="box-content mx-auto w-16 h-16" />
        <p className="mt-2">{name}</p>
      </div>
    </div>
  );
};

export default Skills;
