import { Link } from "react-router-dom";

const TechSupport = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center m-3 mt-[10%]'>
            <Link to='/techsupport/assigned' className='bg-[#f7931a] m-1 py-20 px-24 text-[24px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold rounded-lg text-[#FFF] text-center md:px-24'>Assigned / Pending Tickets</Link>
            <Link hidden={true} to='/techsupport/resolved' className='bg-[#f2b163] m-1 py-20 px-24 text-[24px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold rounded-lg text-[#FFF] text-center md:px-24'>Resolved</Link>
            <Link hidden={true} to='/techsupport/all' className='bg-[#f2b163] m-1 py-20 px-24 text-[24px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold rounded-lg text-[#FFF] text-center md:px-24'>All</Link>
        </div>
    )
}

export default TechSupport;