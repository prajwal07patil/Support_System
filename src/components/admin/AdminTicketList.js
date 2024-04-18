import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminTicketsList() {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    mobile: '',
    email: ''
  });

  return(
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 m-2">
      <h2 className="text-lg font-semibold mb-4 text-center">My List</h2>
      <Link to='/admin/ticket/1234'>
        <div className="pb-2 mb-4">
          <p className="text-gray-600 mb-2"><span className="font-semibold">Ticket Id:</span> {formData.name}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {formData.name}</p>
           <p className="text-gray-600 mb-2"><span className="font-semibold">Message:</span> {formData.message}</p>
        </div>
      </Link>
    </div>
  );
}

export default AdminTicketsList;
