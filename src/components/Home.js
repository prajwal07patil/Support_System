import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='flex justify-around items-center m-3'>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/user/connectus'>Create Ticket</Link></button>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/user/tickets'>My Old Ticket</Link></button>
        </div>
  )
}

export default Home
