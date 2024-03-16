import {Link} from "react-router-dom"
import SignWithGmailBtn from "../../components/SigninWithGoogle"
import SectionBreak from "../../components/SectionBreak"
import SignupInputs from './../../components/SignupInputs';
import RegisterButton from './../../components/RegisterButton';

const Registration = () => {
  return (
    <section className='w-full py-10 h-full'>
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
      <div className='form-sec ps-28 w-11/2 mb-10 '>
      <SignupInputs/>
      </div>
      <div className='m-auto w-72 text-center'>
      <RegisterButton/>
      <p className='text-base text-gray-700 mt-2'>Already a member?<a className=' cursor-pointer font-bold text-[#1e7887]'>LOG IN</a> </p>
      </div>
    </div> 
    </div>

  </section>
  )
}

export default Registration