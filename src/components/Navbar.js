import { useState } from "react";
import tech from './assests/logo/tech.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "./redux/slice/loginSlice";

const Navbar = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(currentUser)

    const logOutHandler = () => {
        dispatch(signOut());
        navigate('/')
    }

    return (
        <div className="flex justify-between bg-[#fff] rounded-b-xl border-b-2 p-2 overflow-hidden">
            <div>
                <Link to='/' className="ml-4 flex items-center gap-2">
                    <img className="h-10 w-12" src={tech} alt="" />
                    <h2 className="font-semibold text-center text-black">Support System</h2>
                </Link>
            </div>
            <div className='flex items-center mr-4 gap-4'>
                {currentUser ? (
                    <button className='border border-gray-300 rounded-md bg-[#B9005B] text-white px-3 py-1' 
                    onClick={logOutHandler}
                    >Logout</button>
                ) : (
                    <div className="m-2">
                        <Link to="/login" className='border border-gray-300 rounded-md bg-[#B9005B] text-white px-3 py-1 m-1'>Login</Link>
                        <Link to="/signup" className='border border-gray-300 rounded-md bg-[#B9005B] text-white px-3 py-1 m-1'>Register</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
