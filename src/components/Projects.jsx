function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
<div
  className="
  bg-slate-900
  rounded-xl
  overflow-hidden
  hover:-translate-y-2
  hover:shadow-xl
  transition
  duration-300
  "
>
  <img
    src="/Prakritiveda.png"
    alt="Prakritiveda"
    className="w-full h-52 object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold">
      Prakritiveda
    </h3>

    <p className="mt-4 text-slate-300">
      Grocery + Ayurveda ecommerce platform.
    </p>
    <div className="flex flex-wrap gap-2 mt-4">

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    React
  </span>

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    Node.js
  </span>

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    MongoDB
  </span>

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    Express
  </span>

</div>

    <div className="flex gap-3 mt-5">

  <a
    href="https://github.com/anshu-katiyar/fraud-detection-ai"
    target="_blank"
    rel="noreferrer"
    className="
      bg-green-500
      px-5
      py-2
      rounded-lg
      font-medium
      hover:bg-green-600
      hover:scale-105
      transition
    "
  >
    Live Demo
  </a>

  <a
    href="https://github.com/anshu-katiyar/fraud-detection-ai"
    target="_blank"
    rel="noreferrer"
    className="
      border
      border-slate-600
      px-5
      py-2
      rounded-lg
      font-medium
      hover:bg-slate-800
      hover:scale-105
      transition
    "
  >
    GitHub
  </a>

</div>
  </div>
</div>

        <div
  className="
  bg-slate-900
  rounded-xl
  overflow-hidden
  hover:-translate-y-2
  hover:shadow-xl
  transition
  duration-300
  "
>
  <img
    src="/traffic.png"
    alt="traffic"
    className="w-full h-52 object-cover"
  />

  <div className="p-6">
    <h3 className="text-2xl font-bold">
      traffic
    </h3>

    <p className="mt-4 text-slate-300">
      Traffic prediction system 
    </p>
    <div className="flex flex-wrap gap-2 mt-4">

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    React
  </span>

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    AI
  </span>

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    API
  </span>

  <span className="bg-slate-800 px-3 py-1 rounded-lg text-sm">
    Node.js
  </span>

</div>

    <div className="flex gap-3 mt-5">

  <a
    href="https://real-time-traffic-prediction-system-rshsy6h3zylwrx7zek9txc.streamlit.app/"
    target="_blank"
    rel="noreferrer"
    className="
      bg-green-500
      px-5
      py-2
      rounded-lg
      font-medium
      hover:bg-green-600
      hover:scale-105
      transition
    "
  >
    Live Demo
  </a>

  <a
    href="https://github.com/anshu-katiyar/Real-Time-Traffic-Prediction-System"
    target="_blank"
    rel="noreferrer"
    className="
      border
      border-slate-600
      px-5
      py-2
      rounded-lg
      font-medium
      hover:bg-slate-800
      hover:scale-105
      transition
    "
  >
    GitHub
  </a>

</div>
  </div>
</div>

      </div>
    </section>
  );
}

export default Projects;