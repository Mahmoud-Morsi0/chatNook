// import {Link} from "react-router-dom"
// import SignWithGmailBtn from "../../components/SigninWithGoogle"
// import SectionBreak from "../../components/SectionBreak"
// import SignupInputs from './../../components/SignupInputs';
// import RegisterButton from './../../components/RegisterButton';
// import { useFormik } from 'formik';
// import { userValidationSchema } from "../../schema/shemaValidation";
// // import { userValidationSchema } from './schema/shemaValidation';

// const Registration = () => {
//   const onSubmit= async(values,actions)=>{
//     await new Promise ((resolve)=>setTimeout(resolve,1000))
//     actions.resetForm()
//   }
//   const {values,handleChange,handleBlur,handleSubmit,errors,touched,isSubmitting} =useFormik({
 
//     validationSchema:userValidationSchema,
//     onSubmit
//   })
//   return (
//     <section className='w-full pt-20 h-lvh'>
//     <div className='flex flex-row w-5/6 m-auto h-5/6'>
//     <div className='left-sec pt-20 w-1/2'>
//     <img className='w-4/6 m-auto' src="login img/Speech bubbles-amico 1.png" alt="" /> 
//     </div>
//     <div className='right-sec w-1/2'>
//       <div className="header-text text-cyan-700 font-bold text-3xl m-auto text-center mb-5 ">
//       Join With Our Community
//       </div>
//       <p className='sub-heading text-gray-400 text-sm text-center block mb-7 font-medium'>
//       Help you to contact everyone with just easy way
//       </p>
//       <SignWithGmailBtn/>
//       <SectionBreak/>
//       <form onSubmit={handleSubmit}>
//       <div className='form-sec ps-28 w-11/2 mb-10 '>
//       <SignupInputs/>
//       </div>
//       <div className='m-auto w-72 text-center'>
//       <RegisterButton onSubmit={handleSubmit} />
//       <p className='text-base	mt-2'>Already a member?<a className=' text-cyan-700'>LOG IN</a> </p>
//       </div>
//       </form>

//     </div> 
//     </div>

//   </section>
//   )
// }

// export default Registration

import React from "react";
import { useFormik } from 'formik';
import { userValidationSchema } from "../../schema/shemaValidation";
import SignWithGmailBtn from "../../components/SigninWithGoogle";
import SectionBreak from "../../components/SectionBreak";
import SignupInputs from './../../components/SignupInputs';
import RegisterButton from './../../components/RegisterButton';

const Registration = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
  }

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      profilePic: "" // You can provide a default value or leave it empty as per your requirement
    },
    validationSchema: userValidationSchema,
    onSubmit
  });

  return (
    <section className='w-full pt-20 h-lvh'>
         <section className='w-full pt-20 h-lvh'>
    <div className='flex flex-row w-5/6 m-auto h-5/6'>
    <div className='left-sec pt-20 w-1/2'>
    <img className='w-4/6 m-auto' src="login img/Speech bubbles-amico 1.png" alt="" /> 
    </div>
    <div className='right-sec w-1/2'>
      <div className="header-text text-cyan-700 font-bold text-3xl m-auto text-center mb-5 ">
      Join With Our Community
      </div>
      <p className='sub-heading text-gray-400 text-sm text-center block mb-7 font-medium'>
      Help you to contact everyone with just easy way
      </p>
      <SignWithGmailBtn/>
      <SectionBreak/>
      <form onSubmit={onSubmit}>
      <div className='form-sec ps-28 w-11/2 mb-10 '>
      <SignupInputs/>
      </div>
      <div className='m-auto w-72 text-center'>
      <RegisterButton />
      <p className='text-base	mt-2'>Already a member?<a className=' text-cyan-700'>LOG IN</a> </p>
      </div>
      </form>

    </div> 
    </div>

  </section>
    </section>
  );
}

export default Registration;
