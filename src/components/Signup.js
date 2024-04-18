import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        e.preventDefault();
        setInput({
            [e.target.id]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
      setInput({
            name: "",
            email: "",
            password: ""
        })
    }

    
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-96 p-8 bg-white rounded-lg shadow-2xl">
            <h1 className="text-2xl font-bold mb-4 text-center">User Signup</h1>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                  value={input.name}
                  onChange={onChangeHandler}
                  placeholder="Name"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                  value={input.email}
                  onChange={onChangeHandler}
                  placeholder="Email"
                 
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                  value={input.password}
                  onChange={onChangeHandler}
                  placeholder="Password"
                  
                />
              </div>
             
              <button
                className="w-full bg-[#192841] text-white font-bold py-2 px-4 rounded-md my-3"
                onClick={onSubmitHandler}
                >
                Signup
              </button>
              <div>
                <p className="text-center">
                  Already have an account?{" "}
                  <span className="text-blue-600 font-semibold">
                    <Link to="/login">Back to Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      )
}

export default Signup;