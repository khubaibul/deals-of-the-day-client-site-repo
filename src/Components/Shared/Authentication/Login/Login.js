import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import facebookLogo from "../../../../Assets/Logo/icons8-facebook.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { setAuthToken } from '../../Api/Auth'
import SharedButton from '../../Button/SharedButton'
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import SmallSpinner from '../../Button/SmallSpinner';
import { setAuthToken } from '../../../../Context/Auth';

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { signIn, signInWithGoogle, signInWithFacebook, resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/user-profile";



    // SignIn User
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // SignIn
        signIn(email, password)
            .then(result => {
                toast.success("Login Successful...");
                setAuthToken(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error(err.message)
                console.log("From SignIn", err);
                toast.error(err.message.slice(10))
                setLoading(false);
            })

    }

    // Reset Password
    const handleResetPassword = () => {
        resetPassword(userEmail)
            .then(result => {
                toast("Please Check Your Email To Reset Password...")
            })
            .catch(err => {
                console.log("From Reset Password", err);
                setLoading(false);
            })
    }




    // SignIn With Google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Login With Google Successful");
                setAuthToken(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log("From Google SignIn", err);
                toast.error(err.message.slice(10))
            })
    }

    // SignIn With Facebook
    const handleSignInWithFacebook = () => {
        signInWithFacebook()
            .then(result => {
                toast.success("Login With Facebook Successful");
                setAuthToken(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log("From Google SignIn", err);
                toast.error(err.message.slice(10))
            })
    }


    return (
        <div className='flex justify-center items-center pt-8'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-yellow-500 text-neutral mb-10'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Login</h1>
                    <p className='text-sm'>
                        Login to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                onBlur={e => setUserEmail(e.target.value)}
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <SharedButton
                            type='submit'
                            classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            {
                                loading ? <SmallSpinner></SmallSpinner>
                                    : "Login"
                            }
                        </SharedButton>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button
                        onClick={handleResetPassword}
                        className='text-xs hover:underline font-semibold'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-4'>
                    <button
                        onClick={handleSignInWithGoogle}
                        aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg>
                    </button>
                    <button
                        onClick={handleSignInWithFacebook}
                        aria-label='Log in with Facebook' className='rounded-sm text-neutral'>
                        <img className='w-6 h-6' src={facebookLogo} alt="" />
                    </button>
                </div>
                <p className='px-6 text-sm text-center'>
                    Don't have an account yet?{' '}
                    <Link to='/sign-up' className='hover:underline text-gray-600'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
