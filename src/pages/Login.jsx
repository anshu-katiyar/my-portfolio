import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@anshu.com" &&
      password === "123456"
    ) {
      localStorage.setItem("adminAuth", "true");

      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950">

      <form
        onSubmit={handleLogin}
        className="bg-slate-900 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-3xl text-white mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-green-500 w-full py-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;