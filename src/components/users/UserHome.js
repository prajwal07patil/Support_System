import React from 'react';
import { Link } from 'react-router-dom';

function UserHome() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='bg-[#7AA2E3] m-2 p-2 rounded-lg text-white text-center w-full sm:w-auto'>
        <Link to='/user/createticket'>Create Ticket</Link>
      </button>
      <button className='bg-[#7AA2E3] m-2 p-2 rounded-lg text-white text-center w-full sm:w-auto'>
        <Link to='/user/tickets'>My Old Tickets</Link>
      </button>
    </div>
  );
}

export default UserHome;
