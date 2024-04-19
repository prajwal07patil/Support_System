import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addInfo } from '../redux/slice/ticketSlice';

function ConnectUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ticketData = useSelector((state) => state.ticket.ticketData);

  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mob: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addInfo({ ...formData, image }));
    setFormData({
      name: '',
      email: '',
      mob: '',
      message: '',
    });
    setImage(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center items-center h-screen mt-6">
      <div className="max-w-full sm:max-w-5xl w-full flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-1/2 p-4">
          <div className="max-h-72  border rounded-lg shadow-2xl">
            {image && (
              <img
                src={image}
                alt="Product"
                className="max-w-full"
              />
            )}
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4 bg-white rounded-lg shadow-2xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Create Ticket</h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="mob"
                name="mob"
                value={formData.mob}
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                placeholder="Phone No"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                placeholder="Message"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profile" className="block mb-2">
                Send Message File
              </label>
              <input
                type="file"
                id="profile"
                name="profile"
                className="w-full p-1 border rounded focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
            <button
              className="w-full bg-[#B9005B] text-white font-bold py-2 px-4 rounded-md my-3"
              onClick={onSubmitHandler}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConnectUs;
