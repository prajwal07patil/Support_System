import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../Login";
import axios from "axios";
import { uid } from "uid";

function UserTicket() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { ticketId } = useParams();

  const [userTicketData, setUserTicketData] = useState([]);
  const [chatData, setChatData] = useState({});
  const [status, setStatus] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const cancelTicket = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(`http://localhost:3001/tickits/${userTicketData?.id}`, {
        ...userTicketData,
        isCanceled: true,
      });
      setUserTicketData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getChatData = async () => {
    try {
      console.log("api chat");
      const response = await axios.get("http://localhost:3001/chats", {
        params: {
          userId: currentUser.id,
          ticketId,
        },
      });
      // console.log(response?.data[0]);
      setChatData(response?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      console.log(chatData);
      getChatData();
      const time = new Date().getTime() + 330 * 60 * 1000;
      chatData?.messages?.push({ time, by: currentUser.type, message: input });
      const response = await axios.put(`http://localhost:3001/chats/${chatData?.id}`, {
        ...chatData,
        messages: chatData.messages,
      });

      console.log(response?.data?.messages);
    } catch (error) {
      console.log(error);
    }
  };

  const getTicketData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tickits", {
        params: {
          userId: currentUser.id,
          id: ticketId,
        },
      });
      // console.log(response);
      setUserTicketData(response?.data[0]);
      setStatus(response?.data[0]?.isResolved);
      setCanceled(response?.data[0]?.isCanceled);
      getChatData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicketData();
  }, []);
  console.log(chatData);
  return !currentUser || currentUser.type !== "user" ? (
    <Login />
  ) : (
    <div className="flex justify-center mt-8 flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-8 m-2 p-4 border shadow-md bg-[#F0ECE3]">
        <h2 className="text-center font-bold mb-4">Information User Ticket</h2>
        <div className="mb-4 flex flex-col md:flex-row">
          {userTicketData?.image ? (
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4">
              <img src={userTicketData?.image} alt="Image of Ticket" className="w-full h-auto" />
            </div>
          ) : (
            <></>
          )}

          <div className="w-full md:w-2/3">
            <div className="border-b pb-4 mb-4">
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Ticket Id:</span>
                {userTicketData?.id}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Name:</span>
                {userTicketData?.name}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span>
                {userTicketData?.email}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Mobile:</span>
                {userTicketData?.mob}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Message:</span>
                {userTicketData?.message}
              </p>
            </div>
            <div className="flex justify-between items-center">
              {canceled ? (
                <h2 className="font-medium">canceled By me.</h2>
              ) : (
                <h2 className="font-medium">
                  Status: <span>{userTicketData?.isResolved ? "Resolved" : "Pending"}</span>
                </h2>
              )}

              {!status && !canceled && (
                <button
                  onClick={cancelTicket}
                  className="bg-[#f7931a] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {status && (
        <div className="w-full md:w-1/2  pl-8 m-2 p-4 border shadow-md relative bg-white">
          <div className="overflow-auto overflow-y-auto h-56 bg-[#F0ECE3] p-4">
            {chatData?.messages
              ?.sort((a, b) => a - b)
              ?.map((chat) => (
                <p key={uid(5)}>
                  {chat?.by}: {chat?.message}
                </p>
              ))}

            <div className="mt-4 md:absolute bottom-0 left-0 right-0">
              <div className="flex">
                <input
                  type="text"
                  className="w-full border rounded px-2 py-1 mr-2 focus:outline-none "
                  placeholder="Ask a question for tech..."
                  onChange={handleOnChange}
                />
                <button
                  onClick={sendMessage}
                  className="bg-[#21BF73] text-white font-bold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTicket;