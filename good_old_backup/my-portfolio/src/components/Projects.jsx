import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ligula nec magna gravida, a tempus est euismod.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/example/project1",
    deployedLink: "https://example-project1.netlify.app/",
    imageSrc: "https://via.placeholder.com/350x250",
    flip: true,
  },
  {
    title: "Project 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    techStack: ["React", "Chakra UI"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: "https://via.placeholder.com/350x250",
    flip: false,
  },

  {
    title: "Project 3",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    techStack: ["React", "Chakra UI"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: "https://via.placeholder.com/350x250",
    flip: false,
  },

  {
    title: "Project 4",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    techStack: ["React", "Chakra UI"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: "https://via.placeholder.com/350x250",
    flip: false,
  },
  // Add more project data objects here for additional projects
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto" style={{ width: "80%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-90 mx-auto">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  deployedLink,
  imageSrc,
  flip,
}) => {
  const imageSide = flip ? "right" : "right";
  const detailsSide = flip ? "left" : "left";

  return (
    <div
      className={`project-card flex flex-col md:flex-row items-center shadow-md p-6 bg-white ${
        imageSide === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${imageSide === "left" ? "order-1" : "order-2"}`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full max-w-full md:box-content box-content mx-auto h-auto md:max-h-32 mb-4 md:mb-0 rounded-md"
        />
      </div>
      <div
        className={`flex-1 p-4 md:p-6 ${
          detailsSide === "left" ? "order-1" : "order-2"
        }`}
      >
        <h3 className="project-title text-xl font-semibold mb-2">{title}</h3>
        <p className="project-description text-gray-600 mb-2">{description}</p>
        <p className="project-tech-stack font-bold mb-3">
          Tech Stack: {techStack.join(" | ")}
        </p>
        <div className="flex">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link mr-3 text-lg"
          >
            <FaGithub />
          </a>

          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-deployed-link text-lg"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
