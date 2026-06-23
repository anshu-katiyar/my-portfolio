function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-8">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 p-5 rounded-xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;