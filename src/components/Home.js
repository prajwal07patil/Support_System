import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const currentUser = useSelector((state)=> state.user.currentUser);
 useEffect(()=> {
  console.log(currentUser)
 },[currentUser]);

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
    <div className='flex justify-center items-center mt-[20%]'>
      <h2 className='font-semibold text-xl md:text-2xl text-center px-4'>
        <i>{displayText}</i>
      </h2>
    </div>
  );
}

export default Home;
