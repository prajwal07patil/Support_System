import React, { useState } from "react";

// function AdminTicket() {
//   const [status, setStatus] = useState(false);
//   const [showInput, setShowInput] = useState(false);
//   const [input, setInput] = useState("");

//   const handleOnchange = (e) => {
//     setInput(e.target.value);
//   };

//   const toggleInput = () => {
//     setShowInput(!showInput);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center mt-10">
//       <div className="w-full md:w-3/4 lg:w-1/2 p-4 border shadow-md bg-[#F0ECE3]">
//         <h2 className="text-center font-bold mb-4">Information User Ticket</h2>
//         <div className="flex flex-col md:flex-row">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <img src="" alt="Image of Ticket" className="w-full h-auto" />
//           </div>
//           <div className="w-full md:w-2/3">
//             <div className="border-b pb-4 mb-4">
//               <p className="text-gray-600 mb-2">
//                 <span className="font-semibold">Ticket Id:</span>
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <span className="font-semibold">Name:</span>
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <span className="font-semibold">Email:</span>
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <span className="font-semibold">Mobile:</span>
//               </p>
//               <p className="text-gray-600 mb-2">
//                 <span className="font-semibold">Message:</span>
//               </p>
//             </div>

//             <div className="flex flex-col md:flex-row justify-between items-center ">
//               <h2 className="font-medium">
//                 Status: <span>{status ? "Assigned" : "Pending"}</span>
//               </h2>
//               {!status && (
//                 <div className="flex items-center">
//                   <select className="border-b border-gray-400 pl-2 pr-8 rounded-lg focus:outline-none mb-2 md:mb-0">
//                     <option value="">Select tech supporter</option>
//                     <option value="">@1B</option>
//                     <option value="">@1A</option>
//                     <option value="">@1C</option>
//                   </select>
//                   <button className="bg-[#4f6d7a] text-white m-1 px-3 rounded">
//                     Assign
//                   </button>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//       {status && (
//         <div className="w-full md:w-3/4 lg:w-1/2 mt-4 p-4 border shadow-md ">
//           <h2 className="text-center font-bold mb-4">Tech Answer:</h2>
//           <p>Tech: Here tech answer</p>
//           <p>User: {input}</p>
//           <button
//             onClick={toggleInput}
//             className="mt-4 bg-[#4f6d7a] text-white font-bold py-2 px-4 rounded"
//           >
//             Reply
//           </button>
//           {showInput && (
//             <div className="mt-4">
//               <input
//                 type="text"
//                 className="border rounded px-2 py-1 mr-2"
//                 placeholder="Ask a question for tech..."
//                 onChange={handleOnchange}
//               />
//               <button className="bg-[#4f6d7a] text-white font-bold py-2 px-4 rounded">
//                 Send
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminTicket;

function AdminTicket() {
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

            <div className="flex flex-col md:flex-row justify-between items-center ">
              <h2 className="font-medium">
                Status: <span>{status ? "Assigned" : "Pending"}</span>
              </h2>
              {!status && (
                <div className="flex items-center">
                  <select className="border-b border-gray-400 pl-2 pr-8 rounded-lg focus:outline-none mb-2 md:mb-0">
                    <option value="">Select tech supporter</option>
                    <option value="">@1B</option>
                    <option value="">@1A</option>
                    <option value="">@1C</option>
                  </select>
                  <button className="bg-[#4f6d7a] text-white m-1 px-3 rounded">
                    Assign
                  </button>
                </div>
              )}
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

export default AdminTicket;
