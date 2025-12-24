import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { NavLink } from "react-router-dom";


const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleFormData(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <section className="w-full h-screen flex justify-center">
      <div className="w-full max-w-lg p-6">
        <div className="text-2xl font-bold mb-10 flex justify-center">
          <img src="./fitzdo_circle.svg" alt="logo" height="60" className="pt-2 pb-2" />
        </div>

        <h2 className="text-3xl text-black font-medium mb-6 capitalize">Register account here</h2>

        <div className="mb-5">
          <label htmlFor="email" className="block text-base text-gray-dark">
            Email - ID <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 text-base text-primary border border-gray-medium focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-medium"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-base text-gray-dark">
            Enter Your Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 text-base text-primary border border-gray-medium focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-medium"
            value={formData.password}
            onChange={(e) => handleFormData(e)}
          />
        </div>

        <div className="mb-4">
          <p to="/login" className="text-sm text-gray-dark">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-blue underline">
              Register here
            </NavLink>
          </p>
        </div>

        <CustomButton btnText="Login" />
      </div>
    </section>
  );
};

export default LoginUser;
