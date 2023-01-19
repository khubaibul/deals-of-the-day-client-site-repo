import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import facebookLogo from "../../../../Assets/Logo/icons8-facebook.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthContext/AuthProvider';
import SharedButton from '../../Button/SharedButton';
import SmallSpinner from '../../Button/SmallSpinner';
import { setAuthToken } from '../../../../Context/Auth';
import useDynamicTitle from '../../../../Hooks/useDynamicTitle';

const Signup = () => {

    useDynamicTitle("Signup")


    const [loading, setLoading] = useState(false);
    const { createUser, updateUserProfile, signInWithGoogle, signInWithFacebook, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/user-profile";
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const buyerOrSeller = form.buyerOrSeller.value;

        const user = {
            name,
            email,
            buyerOrSeller
        }


        // Upload To Imgbb
        const formData = new FormData();
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_apikey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // SignUp User
                createUser(email, password)
                    .then(result => {

                        // Set User To DB And Get Token
                        setAuthToken(user);

                        // Update User Profile
                        updateUserProfile(name, data.data.display_url)
                            .then(result => {
                                form.reset();
                                setLoading(false);
                                toast.success("SignUp Successful...!")
                                navigate(from, { replace: true });
                            })
                            .catch(err => {
                                toast.error(err.message.slice(10))
                                console.log("From Update Profile", err)
                            })

                    })
                    .catch(err => {
                        console.log("From Create User", err);
                        toast.error(err.message.slice(10))
                        setLoading(false);
                    })

            })
            .catch(err => {
                console.log("From Imgbb", err);
                toast.error(err.message.slice(10))
                setLoading(false)
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
        <div className='flex justify-center items-center pt-8 '>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-yellow-500 text-neutral mb-10'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Signup</h1>
                    <p className='text-sm text-gray-800'>Create a new account</p>
                </div>
                <div className='flex gap-x-4 mb-4 font-semibold'>
                    <div>
                        <div>
                            <h4 className='text-lg'>Admin</h4>
                            <p>Email: admin@gmail.com</p>
                            <p>Password: 123456789</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4 className='text-lg'>Seller</h4>
                            <p>Email: xoeydipti@gmail.com</p>
                            <p>Password: 03101999</p>
                        </div>
                    </div>
                </div>
                <form
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                    onSubmit={handleSubmit}
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Your Image
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                required
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-purple-500 text-gray-900'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Buyer Or Seller?
                                </label>
                            </div>
                            <select name="buyerOrSeller" className="select select-bordered w-full">
                                <option value={"Buyer"}>Buyer</option>
                                <option value={"Seller"}>Seller</option>
                            </select>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <SharedButton
                                type='submit'
                                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                {
                                    loading
                                        ? <SmallSpinner></SmallSpinner>
                                        : "Sign Up"
                                }
                            </SharedButton>
                        </div>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center space-x-2'>
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
                    Already have an account yet?{' '}
                    <Link to='/login' className='hover:underline text-gray-600'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
