function Hero() {
  return (
    <section className=" w-screen flex flex-col justify-center items-center h-screen text-white py-20">
      <div className="h-[600px] text-center flex flex-col justify-center items-center ">
        <div className=" flex flex-col gap-4 justify-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hello, I'm Kridsada
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional web applications
            with modern technologies and user-centered design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all w-30 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full w-30 font-semibold transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
