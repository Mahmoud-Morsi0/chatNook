import SignWithGmailBtn from "../../components/SigninWithGoogle";
import SectionBreak from "../../components/SectionBreak";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { userValidationSchema } from "../../schema/shemaValidation";
import { signup } from "../../api/auth";

const Registration = () => {
  const onSubmit = async (values) => {
    console.log(values);
  const repsonse = await signup(values);
    console.log(repsonse);
  }
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (value)=>{onSubmit(value)},
  });

  return (
    <>
      <section className="py-14">
        <div className="xl:grid  gap-4 lg:grid grid-cols-2">
          <div className="left-sec flex  justify-center ">
            <img
              className="w-4/6"
              src="login img/Speech bubbles-amico 1.png"
              alt="signup"
            />
          </div>
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
                <div className=" w-full flex flex-col justify-center mb-6">
                  <label
                    htmlFor="fullName"
                    className="block text-sm ml-3 font-medium leading-6 text-gray-900"
                  >
                    {" "}
                    full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input w-11/12 text-gray-900 focus:outline-none grow focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 focus:bg-gray-10"
                  />
                  {formik.errors.fullName && formik.touched.fullName ? (
                    <div className=" w-11/12 text-red-600">
                      {formik.errors.fullName}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" w-full flex flex-col justify-center mb-6">
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
                    className="input w-11/12 text-gray-900 focus:outline-none grow focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 focus:bg-gray-100"
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="w-11/12 text-red-600">
                      {formik.errors.email}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className=" w-full flex flex-col justify-center mb-6">
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
                    className="input w-11/12 text-gray-900 focus:outline-none grow focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 focus:bg-gray-100"
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className=" w-11/12 text-red-600">
                      {formik.errors.password}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-full flex flex-col justify-center">
                  <button
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                    className="text-white bg-cyan-800 border-2 m-auto border-cyan-800 border-solid rounded-md btn w-2/3 font-medium hover:bg-white hover:text-cyan-800 "
                  >
                    Sign up
                  </button>
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
                  LOG IN
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
