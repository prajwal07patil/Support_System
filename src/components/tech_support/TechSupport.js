import { Link } from "react-router-dom";

const TechSupport = () => {
    return (
        <div className='flex justify-around items-center m-3'>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/techsupport/assigned'>Assigned / Pending</Link></button>
          <button className='bg-[#4f6d7a] m-1 p-2 rounded-lg text-white'><Link to='/techsupport/resolved'>Resolved</Link></button>
          <button className='bg-[#4f6d7a] m-1 p-2 px-4 rounded-lg text-white'><Link to='/techsupport/all'>All</Link></button>
        </div>
    )
}

export default TechSupport;