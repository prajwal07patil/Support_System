import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MyList() {
  const ticketData = useSelector((state) => state.ticket.ticketData);
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    mob: '',
    email: ''
  });

  return (
    <div className="max-w-md mx-auto p-4 mb-4">
      <Link to='/user/ticket/1234' className="block bg-[#F0ECE3] rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-center">My List</h2>
          <hr className="my-2" />
          <p className="text-gray-600 mb-2"><span className="font-semibold">Ticket Id:</span> {formData.name}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {ticketData.name}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {ticketData.email}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Mobile:</span> {ticketData.mob}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Message:</span> {ticketData.message}</p>
        </div>
      </Link>
    </div>
  );
}

export default MyList;
