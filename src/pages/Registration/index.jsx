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
