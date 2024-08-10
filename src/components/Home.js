import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    // console.log(currentUser);
    if (currentUser) navigate(`/${currentUser?.type}`);
  }, []);

  const text = "Welcome To Tech Support....";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let interval;
    if (displayText !== text) {
      interval = setInterval(() => {
        const nextChar = text.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }, 200);
    } else {
      setTimeout(() => setDisplayText(""), 1000);
    }
    return () => clearInterval(interval);
  }, [text, displayText]);

  return (
    <div className='flex justify-center items-center mt-[55px]'>
      <div className='text-center px-4'>
        <div className="text-[80px] font-bold text-[#f7931a]">Noitavonne</div>
        <div className="text-[25px] text-[#000]">Technology & Innovation</div>
        <div className="flex justify-between items-center gap-[10px] mt-[45px]">
          <div className="border border-[#f7931a] text-[#f7931a] px-[35px] py-[15px]">Web Development</div>
          <div className="border border-[#f7931a] text-[#f7931a] px-[35px] py-[15px]">Mobile App Development</div>
          <div className="border border-[#f7931a] text-[#f7931a] px-[35px] py-[15px]">Game Development</div>
        </div>
        <div className="flex justify-center items-center gap-[10px] mt-[20px]">
          <div className="border border-[#f7931a] text-[#f7931a] px-[35px] py-[15px]">UI / UX Design</div>
          <div className="border border-[#f7931a] text-[#f7931a] px-[35px] py-[15px]">3D Design</div>
        </div>
      </div>

    </div>
  );
}

export default Home;
