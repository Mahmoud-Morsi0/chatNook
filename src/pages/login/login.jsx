
import SignWithGmailBtn from '../../components/SigninWithGoogle'
import SectionBreak from '../../components/SectionBreak'
import LoginInputs from '../../components/LoginInputs';
import LoginButton from '../../components/LoginButton';


const Login = () => {
  return (
  <>
    <section className='w-full py-20 h-full bg-white'>
    <div className='flex flex-row w-5/6 m-auto h-5/6'>
    <div className='left-sec pt-20 w-1/2'>
    <img className='w-4/6 m-auto' src="login img/Speech bubbles-amico 1.png" alt="" /> 
    </div>
    <div className='right-sec w-1/2'>
      <div className="header-text text-cyan-700 font-bold text-3xl m-auto text-center mb-5 ">
      Hello, Welcome Back!
      </div>
      <p className='sub-heading text-gray-400 text-sm text-center block mb-7 font-medium'>
      Happy to see you again, login first.
      </p>
      <SignWithGmailBtn/>
      <SectionBreak/>
      <div className='form-sec ps-28 w-11/2 mb-10 '>
      <LoginInputs/>
      </div>
      <div className='m-auto w-72 text-center'>
      <LoginButton/>
      <p className='text-base mt-2'>No account Yet? <a className=' cursor-pointer font-bold text-cyan-700'>SIGN UP</a> </p>
      </div>
    </div> 
    </div>

  </section></>
  )
}

export default Login