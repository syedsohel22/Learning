// src/components/Contact.js

import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="https://github.com/yourusername"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <p className="flex items-center text-gray-600">
            <FaPhone className="mr-2" />
            Phone: +91 9420278216
          </p>
          <p className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" />
            Email: mr.sohelsyed.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
