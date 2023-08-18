// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav id="nav-menu" className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="text-2xl font-semibold">Sohel Syed</div>
        {/* Second part of navbar */}
        <ul className="flex space-x-6">
          <li className="nav-link home">
            <a href="#home">Home</a>
          </li>
          <li className="nav-link about">
            <a href="#about">About</a>
          </li>
          <li className="nav-link skills">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-link projects">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-link contact">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-link resume">
            <a
              href="link-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
