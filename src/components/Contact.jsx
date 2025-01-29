import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import MyPicture from "./myPicture";
 
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nesrine BOUZID",
          from_email: form.email,
          to_email: "nesrine.bouzid@ensia.edu.dz",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* About Me Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>About Me</p>
        <h3 className={styles.sectionHeadText}>Contact Information.</h3>

        <div className='mt-6 space-y-4'>
          <p className='text-white font-medium'>
            <span className='font-bold'>Name:</span> Nesrine BOUZID
          </p>
          <p className='text-white font-medium'>
            <span className='font-bold'>Email:</span> nesrine.bouzid@ensia.edu.dz
          </p>
          {/* <p className='text-white font-medium'>
            <span className='font-bold'>Phone:</span> 
          </p> */}
          <p className='text-white font-medium'>
            <span className='font-bold'>GitHub:</span> <a href='https://github.com/nesrine-aibot' target='_blank' rel='noopener noreferrer' className='text-blue-400'>my github link</a>
          </p>
          <p className='text-white font-medium'>
            <span className='font-bold'>LinkedIn:</span> <a href='https://www.linkedin.com/in/nesrine-bouzid-b462b3252/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>my linkdin link</a>
          </p>

          <p className='text-white font-medium'>
            <span className='font-bold'>Kaggle:</span> <a href='https://www.linkedin.com/in/nesrine-bouzid-b462b3252/' target='_blank' rel='noopener noreferrer' className='text-blue-400'>my Kaggle link</a>
          </p>

        </div>
      </motion.div>

     

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      <MyPicture />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
