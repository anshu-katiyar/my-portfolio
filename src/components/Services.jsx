import { FaLaptopCode, FaShoppingCart, FaRobot } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Modern business websites and landing pages.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Development",
      desc: "Online stores with cart, payment and admin panel.",
    },
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      desc: "AI chatbots, automation and smart business tools.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-slate-900 p-6 rounded-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="text-4xl text-green-400 mb-4">{service.icon}</div>

            <h3 className="text-2xl font-bold">{service.title}</h3>

            <p className="mt-4 text-slate-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
