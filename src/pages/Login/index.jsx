import SignWithGmailBtn from "../../components/SigninWithGoogle";
import SectionBreak from "../../components/SectionBreak";
import { Link } from "react-router-dom";
import RememberMeCheckbox from "../../components/RememberMeCheckbox";
import { useFormik } from "formik";
import { userValidationSchema } from "../../schema/shemaValidation";
import { login } from "../../api/auth";
import React, { useState, useEffect } from "react";
import DarkMode from "./../../components/DarkMode";
const Login = () => {
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const onSubmit = async (values) => {
    console.log(values);
    const repsonse = await login(values);

    console.log(response);
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <section className="w-full p-12 h-full ">
      <div className="flex flex-row w-5/6 m-auto ">
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
            Hello, Welcome Back!
          </div>
          <p className="sub-heading text-gray-400 text-sm text-center block mb-7 font-medium">
            Happy to see you again, login first.
          </p>
          <SignWithGmailBtn />
          <SectionBreak />
          <div className="form-sec ps-28 w-11/2 mb-10 ">
            <form onSubmit={handleSubmit}>
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
                className={`block w-5/6 h-10 rounded-md ml-3 mt-2 mb-2 py-1 pl-4 pr-20 bg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
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
                className={`block w-5/6 h-10 rounded-md ml-3 mt-2 mb-2 py-1 pl-4 bg pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
                  errors.password && touched.password ? "outline-red-500" : ""
                }`}
              />
              {errors.password && touched.password && (
                <p className="ms-5 text-red-600">{errors.password}</p>
              )}
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="ms-3 my-3 mr-4 items-center"
                  />
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-cyan-800 border-2 border-cyan-800 border-solid rounded-md w-64 h-12 font-medium hover:bg-white hover:text-cyan-800 mx-4"
              >
                Login
              </button>
            </form>
          </div>

          <div className="m-auto w-72 text-center">
            <p className="text-base mt-2 text-g">
              No account Yet?{" "}
              <Link
                className=" cursor-pointer font-bold text-[#1e7887]"
                to="/register"
              >
                SIGN UP{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
