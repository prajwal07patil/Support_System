import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInfo } from "../redux/slice/ticketSlice";
import Login from "../Login";
import axios from "axios";
import { uid } from "uid";

function CreateTicket() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mob: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const id = uid(11);
      const createticket = await axios.post(`http://localhost:3001/tickits`, {
        ...formData,
        id,
        image,
        userId: currentUser?.id,
        isResolved: false,
        isCanceled: false,
      });
      dispatch(addInfo({ ...formData, id, image }));

      setFormData({
        name: "",
        email: "",
        mob: "",
        message: "",
      });
      setImage(null);

      navigate(`/user/ticket/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {}, []);

  return !currentUser || currentUser.type !== "user" ? (
    <Login />
  ) :(
    <div className="flex justify-center items-center min-h-screen mt-6">
      <div className="max-w-full sm:max-w-5xl w-full flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-1/2 p-4">
          <div className="h-[500px] border rounded-lg shadow-2xl overflow-hidden">
            {image && (
              <img
                src={image}
                alt="Product"
                className="w-full h-full object-cover"
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
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
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
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
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
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="Phone No"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
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
                className="w-full p-1 border rounded-lg focus:outline-none"
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

export default CreateTicket;
