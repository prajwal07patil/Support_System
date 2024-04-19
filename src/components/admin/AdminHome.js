import { Link } from "react-router-dom";

const AdminHome = () => {
    return (
        <div className='flex justify-center items-center h-full mt-[20%]'>
            <div className='flex justify-center gap-32 items-center m-3'>
                <Link to='/admin/tickets' className='bg-[#781D42] my-2 px-4 py-2 rounded-lg text-white text-center'>Tickets</Link>
                <Link to='/admin/techsupport' className='bg-[#781D42] my-2 px-4 py-2 rounded-lg text-white text-center'>Tech Supports</Link>
                <Link to='/admin/users' className='bg-[#781D42] my-2 px-4 py-2 rounded-lg text-white text-center'>Users</Link>
            </div>
        </div>
    )
}

export default AdminHome;
