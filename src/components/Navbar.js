import { useState } from "react";
import tech from './assests/logo/tech.png';
import logonew from './assests/noitavonne-logo-black-white 1.svg';
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
        <div className="flex items-center justify-between bg-[#f7931a] border-b-2 px-[7rem] py-[0.5rem] overflow-hidden">
            <div>
                <Link to='/' className="">
                    {/* <img className="h-10 w-12" src={tech} alt="" /> */}
                    {/* <h2 className="font-semibold text-center text-black">Support System</h2> */}
                    <img className="w-[230px] h-[30px]" src={logonew} alt="logo" width={230} height={30} />
                </Link>
            </div>
            <div className='flex items-center mr-4 gap-4'>
                {currentUser ? (
                    <button className='text-white font-semibold border border-bg-orange-100 rounded-full px-[10px] py-[5px] hover:bg-orange-600 '
                        onClick={logOutHandler}
                    >Logout</button>
                ) : (
                    <div className="flex items-center gap-[20px]">
                        <Link to="/login" className='text-white font-semibold border border-bg-orange-100 rounded-full px-[10px] py-[5px] hover:bg-orange-600 '>Login</Link>
                        <Link to="/signup" className='text-white font-semibold border border-bg-orange-100 rounded-full px-[10px] py-[5px] hover:bg-orange-600 '>Register</Link>
                    </div>
                )}
            </div>
            <div>
                <div className="text-[#FFF] font-normal">Email: <span className="font-semibold">hr@noitavonne.com</span></div>
                <div className="text-[#FFF] font-normal">Phone: <span className="font-semibold">+91 9209155153</span></div>
            </div>
        </div>
    )
}

export default Navbar;
