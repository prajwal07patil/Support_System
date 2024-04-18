import { Link } from "react-router-dom";

const AdminHome = () => {
    return (
        <div className='flex justify-around items-center m-3'>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/admin/tickets'>Tickets</Link></button>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/admin/techsupport'>Tech Supports</Link></button>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/admin/users'>Users</Link></button>
        </div>
      )
}

export default AdminHome;
