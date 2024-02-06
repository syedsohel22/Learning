// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Sohel Syed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
