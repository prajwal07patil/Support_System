import { useState } from "react";
import tech from './assests/logo/tech.png'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [login, setLogin] = useState(false);
    return (
        <div className="flex justify-between bg-white rounded-b-xl border-b-2">
        <div >
        <Link to='/' className="ml-4 flex gap-10">
        <img className="h-10 w-12" src={tech} alt="" />
        <h2 className="font-semibold text-center mt-2">Support System</h2>
        </Link>
        </div>
        <div className='flex justify-center mr-4 gap-4'>
        {
          login ? <button className='border border- m-1 px-3 rounded-xl bg-[#192841] text-white' >Logout</button> : <div><button className='border border- m-1 px-3 rounded-xl bg-[#192841] text-white'>Login</button>
          <button className='border border- m-1 px-3 rounded-xl bg-[#192841] text-white'>Register</button></div>
        }
        
        </div>
        </div>
    )
}

export default Navbar;