import SignWithGmailBtn from "../../components/SigninWithGoogle";
import SectionBreak from "../../components/SectionBreak";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { userValidationSchema } from "../../schema/shemaValidation";
import { login } from "../../api/auth";
import { useState } from "react";
import { CookiesProvider, useCookies } from 'react-cookie'

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [cookies, setCookie] = useCookies(['user'])

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const onSubmit = async (values) => {
    console.log(values);
    const repsonse = await login(values);
    setCookie('user', repsonse, { path: '/' })

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
    <section className="w-full py-9 h-full bg-white">
      <div className="flex flex-row w-5/6 m-auto ">
        <div className="left-sec pt-20 w-1/2">
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
                className="block text-sm ml-3 font-medium leading-6 text-gray-900"
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
                className={`block w-5/6 h-10 rounded-md ml-3 mt-2 mb-2 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
                  errors.email && touched.email ? "outline-red-500" : ""
                }`}
              />
              {errors.email && touched.email && (
                <p className="ms-5 text-red-600">{errors.email}</p>
              )}

              <label
                htmlFor="password"
                className="block text-sm ml-3 font-medium leading-6 text-gray-900"
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
                className={`block w-5/6 h-10 rounded-md ml-3 mt-2 mb-2 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 ${
                  errors.password && touched.password ? "outline-red-500" : ""
                }`}
              />
              {errors.password && touched.password && (
                <p className="ms-5 text-red-600">{errors.password}</p>
              )}
              <div>
                <label className=" text-gray-600">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="ms-3 my-3"
                  />
                  Remember Me
                </label>
              </div>
              <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" text-center text-white bg-cyan-800 border-2 border-cyan-800 border-solid rounded-md w-64 h-12 font-medium hover:bg-white hover:text-cyan-800 mx-4"
              >
                Login
              </button>
              </div>
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
