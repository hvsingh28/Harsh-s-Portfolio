import React, { useRef, useState } from 'react';
import { motion } from "motion/react";
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';
import click from '../assets/click.png';
import touch from '../assets/touch.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!data.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)) {
      newErrors.user_email = "Enter a valid email address";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
  () => {
    setSuccess(true);
    setErrors({});
    setLoading(false);
    form.current.reset();

  },

        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-6 py-10 flex flex-col justify-center gap-3 items-center text-white font-roboto"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:text-4xl font-bold"
      >
        Contact Me !
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center italic"
      >
        Got a question? Send me a message, and I'll get back to you soon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-1/3 sm:w-2/3 bg-white/20 rounded flex flex-col gap-3 justify-center items-center p-4"
      >
        <h1 className="lg:text-xl">Get in Touch</h1>

        {success && (
          <p className="text-green-400 text-sm text-center">
            Message sent successfully! 🚀
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 w-full">
          <p className="text-center text-sm">
            Have something to discuss? Send me a message and let's talk.
          </p>

          <input
            name="user_name"
            placeholder="Your Name"
            className="px-2 py-1 border border-white/40 bg-white/10 rounded w-full"
          />
          {errors.user_name && (
            <p className="text-red-400 text-xs">{errors.user_name}</p>
          )}

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="px-2 py-1 border border-white/40 bg-white/10 rounded w-full"
          />
          {errors.user_email && (
            <p className="text-red-400 text-xs">{errors.user_email}</p>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            className="px-2 py-1 border border-white/40 bg-white/10 rounded w-full"
          />
          {errors.message && (
            <p className="text-red-400 text-xs">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-2 py-2 rounded text-white transition
              ${loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#292929b3] hover:bg-[#1b1b1b]"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="bg-white/10 w-full rounded p-4 flex gap-3 flex-col text-sm justify-center items-center">
          <div className="flex gap-2">
            <p>Connect with me !</p>
            <img className="hidden lg:block w-4" src={click} />
            <img className="lg:hidden w-4" src={touch} />
          </div>

          <div className="bg-white/5 rounded w-full p-2 flex gap-2">
            <img className="w-6" src={linkedin} />
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/hvsingh28">hvsingh28</a>
          </div>

          <div className="bg-white/5 rounded w-full p-2 flex gap-2">
            <img className="w-6" src={github} />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/hvsingh28">hvsingh28</a>
          </div>

          <div className="bg-white/5 rounded w-full p-2 flex gap-2">
            <img className="w-6" src={mail} />
            <a href="mailto:hvsinghrathore28@gmail.com">
              hvsinghrathore28@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
