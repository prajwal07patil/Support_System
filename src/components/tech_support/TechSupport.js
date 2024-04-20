import { Link } from "react-router-dom";

const TechSupport = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center m-3 mt-[10%]'>
            <Link to='/techsupport/assigned' className='bg-[#781D42] m-1 py-20 px-24 rounded-lg text-white text-center md:px-24'>Assigned / Pending Tickets</Link>
            <Link hidden={true} to='/techsupport/resolved' className='bg-[#781D42] m-1 p-2 rounded-lg text-white text-center md:px-4'>Resolved</Link>
            <Link hidden={true} to='/techsupport/all' className='bg-[#781D42] m-1 p-2 rounded-lg text-white text-center md:px-4'>All</Link>
        </div>
    )
}

export default TechSupport;