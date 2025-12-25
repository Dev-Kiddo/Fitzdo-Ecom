import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, removeError } from "../features/userSlice";
import { toast } from "react-toastify";
import { removeMessage } from "../features/userSlice";

const RegisterUser = () => {
  const { message, error, loading, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleFormData(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log("Hello Prasanth");

    dispatch(registerUser({ ...formData }));
    setFormData((prev) => ({ ...prev, email: "", password: "" }));
  }

  useEffect(
    function () {
      if (message) {
        toast.success(message);
        dispatch(removeMessage());
      }

      if (success) {
        navigate("/login");
      }
    },
    [message, dispatch, navigate, success]
  );

  useEffect(
    function () {
      if (error) {
        toast.error(error);
        dispatch(removeError());
      }
    },
    [dispatch, error]
  );

  return (
    <section className="w-full h-screen flex justify-center">
      <div className="w-full max-w-lg p-6">
        <div className="text-2xl font-bold mb-10 flex justify-center">
          <img src="./fitzdo_circle.svg" alt="logo" height="60" className="pt-2 pb-2" />
        </div>

        <h2 className="text-3xl text-black font-medium mb-6 capitalize">Register account here</h2>

        <form onSubmit={handleSubmit}>
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
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue underline">
                Login here
              </NavLink>
            </p>
          </div>
          <div className="flex items-start mb-4">
            <div>
              <input type="checkbox" className="w-4 h-4 border mt-1 flex items-center justify-center transition-colors duration-200 border-black bg-white"></input>
            </div>
            <p className="text-sm text-gray-dark ml-3">
              By continuing, I agree to FITZDO’s
              <Link className="text-blue ml-1 underline underline-offset-2" to="#">
                Privacy Policy
              </Link>{" "}
              and
              <Link className="text-blue underline underline-offset-2 ml-1" to="#">
                Terms of Use
              </Link>
              .
            </p>
          </div>
          <CustomButton btnType="submit" btnText="Register" />
        </form>
      </div>
    </section>
  );
};

export default RegisterUser;
