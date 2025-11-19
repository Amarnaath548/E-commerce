import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://res.cloudinary.com/dnespxsij/image/upload/f_auto,q_auto/v1758281420/blog/qchri0dxueassebrwudr.jpg",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const validation = () => {
    if (!form.name.trim()) {
      setFormError({ ...formError, name: "name cannot be empty" });
    }
    if (!form.email.includes("@")) {
      setFormError({ ...formError, name: "please enter a valide email" });
    }
    if (!form.password.trim() || form.password.length < 6) {
      setFormError({
        ...formError,
        name: "Password must be atleast 6 chareters",
      });
    }
    return (
      !formError.name &&
      !formError.email &&
      !formError.password &&
      !formError.url
    );
  };

  const register = async () => {
    try {
      const { data } = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        form
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      console.log(form);
      register();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label htmlFor="profile" className="block mb-1 font-medium">
              Profile
            </label>
            <input
              type="url" placeholder="Enter image url" value={form.avatar}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setForm({ ...form,avatar: e.target.value })}
              id="profile"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            className="text-blue-600 font-medium hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
