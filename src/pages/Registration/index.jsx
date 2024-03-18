import { userValidationSchema } from "../../schema/shemaValidation";
import SignWithGmailBtn from "../../components/SigninWithGoogle";
import SectionBreak from "../../components/SectionBreak";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registration } from "../../api/auth";
import DarkMode from "./../../components/DarkMode";
import React, { useState, useEffect } from "react";

const Registration = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { userValidationSchema } from "../../schema/shemaValidation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { registration } from "../../api/auth";
      
const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values) => {
    setLoading(true);
    console.log(values);
    try {
      const response = await registration(values);
      console.log(response);
      if (response.status === 201) {
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
  }, [darkMode]);
  let loaging = true;
  const onSubmit = async (values, actions) => {
    loaging = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    const repsonse = await registration(values);

    console.log(response);
    actions.resetForm();
    loaging = false;
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <section className="w-full h-full p-12">
      <div className="flex flex-row w-5/6 m-auto items-center">
        <div className="left-sec pt-20 w-1/2 flex flex-col items-center ">
          <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <img
            className="w-4/6 m-auto"
            src="login img/Speech bubbles-amico 1.png"
            alt=""
          />
        </div>
        <div className="right-sec w-1/2">
          <div className="header-text text-cyan-700 font-bold text-3xl m-auto text-center mb-5 ">
            Join With Our Community
          </div>
          <p className="sub-heading text-gray-400 text-sm text-center block mb-7 font-medium">
            Help you to contact everyone with just easy way
          </p>
          <SignWithGmailBtn />
          <SectionBreak />
          <div className="form-sec ps-28 w-11/2 mb-10 ">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm ml-3 font-medium leading-6 "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-5/6 h-10 rounded-md ml-3  bg mt-2 mb-2 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
                    errors.fullName && touched.fullName ? "outline-red-500" : ""
                  }`}
                />
                {errors.fullName && touched.fullName && (
                  <p className="ms-5 text-red-600">{errors.fullName}</p>
                )}

                <label
                  htmlFor="email"
                  className="block text-sm ml-3 font-medium leading-6 "

          <div className="right-sec">
            <div className="header-text text-cyan-700 font-bold text-3xl m-auto text-center mb-5 ">
              Join With Our Community
            </div>
            <p className="sub-heading text-gray-400 text-sm text-center block mb-7 font-medium">
              Help you to contact everyone with just easy way
            </p>
            <SignWithGmailBtn />
            <SectionBreak />
            <div className="form-sec mb-10 flex flex-col items-center">
              <form onSubmit={formik.handleSubmit} className="w-full max-w-md">
                <div className="flex m-auto justify-center">
                  {errorMessage ? (
                    <div className="alert alert-error w-11/12 flex flex-col justify-center mb-4 text-white ">
                      {errorMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex m-auto justify-center ">
                  <div className=" w-11/12 mb-6">
                    <label
                      htmlFor="fullName"
                      className="block text-sm ml-3 font-medium leading-6 text-gray-900"
                    >
                      full name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input w-full text-gray-900 focus:outline-none grow focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 focus:bg-gray-10"
                    />
                    {formik.errors.fullName && formik.touched.fullName ? (
                      <div className=" w-11/12 text-red-600">
                        {formik.errors.fullName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex m-auto justify-center">
                  <div className="w-11/12 mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm ml-3 font-medium leading-6 text-gray-900"
                    >
                      {" "}
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="name"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input w-full text-gray-900 focus:outline-none grow focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 focus:bg-gray-100"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="w-11/12 text-red-600">
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex m-auto justify-center">
                  <div className="w-11/12 mb-6">
                    <label
                      htmlFor="password"
                      className="block text-sm ml-3 font-medium leading-6 text-gray-900"
                    >
                      {" "}
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input w-full text-gray-900 focus:outline-none grow focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 focus:bg-gray-100"
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div className=" w-11/12 text-red-600">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex m-auto justify-center">
                  <div className="w-11/12 flex justify-center">
                    {loading ? (
                      <button className="text-white bg-cyan-800 border-2 m-auto border-cyan-800 border-solid rounded-md btn w-2/3  font-medium hover:bg-white hover:text-cyan-800 ">
                        <AiOutlineLoading3Quarters className="animate-spin w-6 h-6" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                        className="text-white bg-cyan-800 border-2 m-auto border-cyan-800 border-solid rounded-md btn w-2/3 font-medium hover:bg-white hover:text-cyan-800 "
                      >
                        Sign up
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="m-auto w-72 text-center">
              <p className="text-base text-gray-700 mt-2">
                Already a member?
                <Link
                  className=" cursor-pointer font-bold text-[#1e7887]"
                  to="/login"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-5/6 h-10 rounded-md ml-3 mt-2 bg mb-2 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
                    errors.email && touched.email ? "outline-red-500" : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <p className="ms-5 text-red-600">{errors.email}</p>
                )}

                <label
                  htmlFor="password"
                  className="block text-sm ml-3 font-medium leading-6 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-5/6 h-10 rounded-md ml-3  bg mt-2 mb-2 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
                    errors.password && touched.password ? "outline-red-500" : ""
                  }`}
                />
                {errors.password && touched.password && (
                  <p className="ms-5 text-red-600">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-white bg-cyan-800 border-2 border-cyan-800 border-solid rounded-md w-64 h-12 font-medium hover:bg-white hover:text-cyan-800 mx-4`}
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="m-auto w-72 text-center">
            <p className="text-base mt-2">
              Already a member?
              <Link
                className=" cursor-pointer font-bold text-[#1e7887]"
                to="/login"
              >
                LOG IN
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
