import React, { useState } from "react";

function UserTicket() {
  const [status, setStatus] = useState(true);
  const [input, setInput] = useState("");
  
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex justify-center mt-8 flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-8 m-2 p-4 border shadow-md bg-[#F0ECE3]">
        <h2 className="text-center font-bold mb-4">Information User Ticket</h2>
        <div className="mb-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4">
            <img src="" alt="Image of Ticket" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-2/3">
            <div className="border-b pb-4 mb-4">
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Ticket Id:</span> 
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Name:</span> 
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> 
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Mobile:</span> 
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Message:</span> 
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="font-medium">
                Status: <span>{status}</span>
              </h2>
              <button className="bg-[#F05454] text-white font-bold py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {status === true ? (
        <div className="w-full md:w-1/2 pl-8 m-2 p-4 border shadow-md relative bg-[#F0ECE3]">
          <div>
            <h2 className="text-center font-bold mb-4">Tech Answer:</h2>
            <p>Tech: Here tech answer</p>
            <p>User: {input}</p>

            <div className="mt-4 md:absolute bottom-0 left-0 right-0">
              <div className="flex">
                <input
                  type="text"
                  className="w-full border rounded px-2 py-1 mr-2 focus:outline-none "
                  placeholder="Ask a question for tech..."
                  onChange={handleOnChange}
                />
                <button className="bg-[#21BF73] text-white font-bold py-2 px-4 rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserTicket;
