import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const templeteId = 'template_gltpfew';
  const serviceId = 'service_ec2omlj';
  const publicId = 'zQKmPLCGhKaG9HurT';

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formRef.current.name.value.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formRef.current.email.value.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!formRef.current.message.value.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(serviceId, templeteId, formRef.current, publicId)
      .then(
        () => {
          setLoading(false);
          setSuccess('Form send successfully');
          formRef.current.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
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
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {success && <p className='text-green-500 mt-5 font-semibold text-xl2 p-3 bg-sky-950 text-center rounded-md '>{success}</p>}
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' placeholder="What's your good name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input type='email' name='email' placeholder="What's your web address?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={7} name='message' placeholder='What you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary '>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
