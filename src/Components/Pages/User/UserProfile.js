import React, { useContext } from 'react';
import { FaMailBulk, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const UserProfile = () => {
    const { user, logOut, theme } = useContext(AuthContext);

    return (
        <div>
            {
                user
                    ?
                    <div className={` ${theme ? "bg-gray-900" : "bg-yellow-400"} font-sans h-screen w-full flex flex-row justify-center items-center`}>
                        <div className={`card w-96 mx-auto ${theme ? "bg-slate-700" : "bg-neutral"} rounded-none text-white`}>
                            <img className="w-32 mx-auto rounded-full border-8 border-white" src={user.photoURL} alt="" />
                            <div className="text-center mt-2 text-3xl font-medium">{user?.displayName}</div>
                            {
                                user.email && <div className="text-center mt-2 font-light text-sm flex items-center justify-center gap-x-2">
                                    <FaMailBulk></FaMailBulk>
                                    {user?.email}
                                </div>
                            }
                            <small className="text-center font-semibold text-base  flex items-center justify-center gap-x-2">
                                <FaUserCircle></FaUserCircle> {user?.uid.toUpperCase()}
                            </small>
                            <hr className="mt-8" />
                            <button className='btn btn-sm btn-outline btn-primary rounded-none w-[60%] mx-auto my-4'>Update Profile</button>
                            <button onClick={logOut} className='btn btn-sm btn-outline btn-accent rounded-none w-[30%] mx-auto mb-4'>Log Out</button>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className='my-56 text-center text-xl '>Your Are Not Logged In. Please
                            <Link to="/login" className='underline-offset-4 underline'> Login</Link>
                        </h2>
                    </div>
            }
        </div>
    );
};

export default UserProfile;