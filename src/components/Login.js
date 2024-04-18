import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        setInput({
            [e.target.id] : e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setInput({
            email: "",
            password: ""
        });
    }
    
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="w-96 p-8 bg-white rounded-lg shadow-2xl">
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                  placeholder="Email"
                  value={input.email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                  placeholder="Password"
                  value={input.password}
                  onChange={onChangeHandler}
                />
              </div>
              <button className="w-full bg-[#192841] text-white font-bold py-2 px-4 rounded-md my-3"
              onClick={onSubmitHandler}
              >
                Login
              </button>
              <div><p className='text-center'>Don't have an account? <span className='text-blue-600 font-semibold'><Link to="/signup">Register</Link></span></p></div>
            </form>
          </div>
        </div>
      );
}

export default Login;