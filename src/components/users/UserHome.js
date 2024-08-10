import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../Login";

function UserHome() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return !currentUser || currentUser.type !== "user" ? (
    <Login />
  ) : (
    <div className="flex justify-center items-center mt-[20%]">
      <button className="bg-[#f7931a] m-2 p-2 rounded-lg text-white text-center w-full sm:w-auto">
        <Link to="/user/createticket">Create Ticket</Link>
      </button>
      <button className="bg-[#f7931a] m-2 p-2 rounded-lg text-white text-center w-full sm:w-auto">
        <Link to="/user/tickets">My Old Tickets</Link>
      </button>
    </div>
  );
}

export default UserHome;
