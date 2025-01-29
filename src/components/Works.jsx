import React from "react";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const handleError = (e) => {
    e.target.onerror = null; // Prevent infinite loop in case the fallback image also fails
    e.target.src = "https://via.placeholder.com/230"; // Fallback image URL in case of error
  };

  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      {/* Image section */}
      <div className="relative w-full h-[230px]">
        <img
          src={image}  // The image URL from the network
          alt={`${name}-project-image`}
          className="w-full h-full object-cover rounded-2xl"
          onError={handleError} // Handle image loading errors
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {/* Open source code link */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Tags section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          These projects highlight my skills and experience with real-world examples. Each project includes a brief description, along with links to code repositories and live demos. They showcase my problem-solving abilities, proficiency with various technologies, and project management skills.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
