// src/components/Home.js

const Home = () => {
  return (
    <section id="home" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        {/* profile picture */}
        <img
          src="https://avatars.githubusercontent.com/u/83800834?v=4"
          alt="Sohel Syed"
          className="home-img mx-auto rounded-full w-80 h-80 mb-6"
        />
        {/* Title or users Name */}
        <h1 id="user-detail-name" className="text-4xl font-semibold mb-2">
          Sohel Syed
        </h1>
        <p id="user-detail-intro" className="text-lg text-gray-600">
          Full Stack Web Developer
        </p>
        <div>
          <a
            id="resume-link-2"
            href="link-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mt-4 px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
