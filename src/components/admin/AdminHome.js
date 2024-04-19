import { Link } from "react-router-dom";

const AdminHome = () => {
    return (
        <div className='flex justify-center items-center h-full mt-[20%]'>
            <div className='flex flex-col md:flex-row justify-center items-center m-3'>
                <Link to='/admin/tickets' className='bg-[#781D42] my-2 px-4 py-2 rounded-lg text-white text-center md:mx-2'>Tickets</Link>
                <Link to='/admin/techsupport' className='bg-[#781D42] my-2 px-4 py-2 rounded-lg text-white text-center md:mx-2'>Tech Supports</Link>
                <Link to='/admin/users' className='bg-[#781D42] my-2 px-4 py-2 rounded-lg text-white text-center md:mx-2'>Users</Link>
            </div>
        </div>
    )
}

export default AdminHome;
