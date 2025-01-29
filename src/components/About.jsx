import React from "react";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => (
  <Tilt className='xs:w-[130px] w-[130px]'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card'>
      <div
        className='bg-tertiary rounded-[15px] py-3 px-6 min-h-[220px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-12 h-12 object-contain'
        />
        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
  I am an AI student with a deep passion for <span className='font-bold text-[#915EFF]'>artificial intelligence</span>, complemented by hands-on experience in <span className='font-bold text-[#915EFF]'>software engineering</span>, <span className='font-bold text-[#915EFF]'>mobile development</span>, and <span className='font-bold text-[#915EFF]'>backend systems</span>. My enthusiasm for exploring the vast realms of computer science, mathematics, and <span className='font-bold text-[#915EFF]'>quantum computing</span> fuels my continuous learning and growth. I am always eager to expand my knowledge and contribute to the innovative advancements in these fields.
</p>
<br>
</br>
<h2 className={styles.sectionHeadText}>Skills & Technologies</h2>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
