import { Code, Database, Globe, Palette } from "lucide-react";

function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      level: 90,
      color: "bg-blue-500",
    },
    { name: "UI/UX Design", icon: Palette, level: 85, color: "bg-purple-500" },
    {
      name: "Backend Development",
      icon: Database,
      level: 80,
      color: "bg-green-500",
    },
    {
      name: "Web Technologies",
      icon: Globe,
      level: 88,
      color: "bg-orange-500",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
  ];

  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12  text-white">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-gray-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 skill-bar-width-${skill.level}`}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 mt-2 block">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-gray-700 px-4 py-2 rounded-full hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
