function About() {
  return (
    <section id="about" className=" w-4/5 h-90 flex items-center ">
      <div className="container mx-auto px-6 flex justify-center ">
        <div
          className="max-w-4xl m-10 border-2 border-amber-50 rounded-2xl backdrop-blur-md bg-white/10 drop-shadow-2xl drop-shadow-blue-800"
          style={{ padding: 10 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                KB
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-400 mb-6">
                I'm a passionate developer with a love for creating digital
                experiences that make a difference. With expertise in both
                frontend and backend technologies, I enjoy the full cycle of
                product development.
              </p>
              <p className="text-lg text-gray-200 mb-6">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full w-30 flex justify-center">
                  Problem Solver
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full w-30 flex justify-center">
                  Team Player
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full w-30 flex justify-center">
                  Lifelong Learner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
