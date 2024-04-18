import React, { useState } from "react";

function AdminTicket() {
  const [status, setStatus] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");
  const handleOnchange = (e) => {
    setInput(e.target.value);
  };
  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 pr-8 m-2 p-4 border shadow-md">
        <h2 className="text-center font-bold mb-4">Information User Ticket</h2>
        <div className="mb-4 flex">
          <div className="w-1/3">
            <img src="" alt="Image of Ticket" className="w-full h-auto" />
          </div>
          <div className="w-2/3">
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
            <div className="flex-col justify-between items-center">
            <div>
            <h2 className="font-medium">
                Status: <span>{status}</span>
              </h2>
            </div>
              <div>
              <div className="flex justify-around">
              <h2 className="font-medium" >Assign to :</h2>
              <select className="border-b border-gray-400 pl-2 pr-8 rounded-lg focus:outline-none">
                <option value="" className="w-full">
                  select tech supporter
                </option>
                <option value="" className="w-full">
                  {" "}
                  @1B
                </option>
                <option value="" className="w-full">
                  @1A
                </option>
                <option value="" className="w-full">
                  @1C
                </option>
              </select>
              <button className="bg-[#4f6d7a] text-white m-1 px-3 rounded">
                Assign
              </button>
            </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      {status === true ? (
        <div className="w-1/2 pl-8 m-2 p-4 border shadow-md">
          <div>
            <h2 className="text-center font-bold mb-4">Tech Answer:</h2>
            <p>Tech :Here tech answer</p>
            <p>user :{input}</p>
            <button
              onClick={toggleInput}
              className="mt-4 bg-[#4f6d7a] text-white font-bold py-2 px-4 rounded"
            >
              Reply
            </button>
            {showInput && (
              <div className="mt-4">
                <input
                  type="text"
                  className="border rounded px-2 py-1 mr-2"
                  placeholder="Ask a question for tech..."
                  onChange={handleOnchange}
                />
                <button className="bg-[#4f6d7a] text-white font-bold py-2 px-4 rounded">
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminTicket;
