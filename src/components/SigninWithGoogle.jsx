import { FcGoogle } from "react-icons/fc";
const SignWithGmailBtn = () => {
    return (
        <div>
            <div className='btn-sec w-72 m-auto mb-8'>
                <button className='btn btn-google rounded-3xl text-center bg-blue-50 p-2 w-72 text-base text-black hover:bg-cyan-700 hover:text-white'>
                    <FcGoogle className='text-2xl bg-white rounded-full' />
                    Sign Up with Gmail
                </button>
            </div>
        </div>
    )
}
export default SignWithGmailBtn