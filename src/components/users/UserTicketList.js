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

  return(
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">

      <h2 className="text-lg font-semibold mb-4 text-center">My List</h2>
      <Link to='/user/ticket/1234'>
      <div className="border-b pb-4 mb-4">
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
