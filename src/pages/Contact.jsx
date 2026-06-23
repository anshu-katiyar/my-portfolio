import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
  "https://anshu-portfolio-backend.onrender.com/api/contact",
  formData
);

    alert("Data Saved Successfully");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  } catch (error) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
  }

  alert("Error Saving Data");
}
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">
          Contact Form
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <button
          type="submit"
          className="bg-green-500 px-5 py-3 rounded w-full"
        >
          Submit
        </button>
      </form>

    </div>
  );
}

export default Contact;