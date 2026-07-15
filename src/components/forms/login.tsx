"use client"
import { useState } from "react";
function Login() {
  const[LoginData,setLoginData]=useState({
    Email: "",
    Password: "",
  });
  const [isRegistered, setIsRegistered] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [RegisterData, setRegisterData] = useState({
    Username: "",
    Password: "",
    Email: "",
    PhoneNumber: "",
  });
  const handleData = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value
    })
  }
  const handleLoginData = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="flex flex-col items-center h-screen bg-[#D8E6EE] justify-around">
      
      <div className="overflow-hidden w-100 h-140 rounded-2xl shadow-2xl my-10">

      <div className={`flex w-200 h-full transition-transform duration-500 ease-in-out
        ${isRegistered ? "translate-x-0":"-translate-x-100"}`}>

          {/* Login Card */}
          <div className="relative flex flex-col justify-center bg-white px-4 min-w-100 max-h-140">
            <h1 className="text-4xl font-bold text-center text-gray-800 m-2 absolute top-6 left-37">
              Login
            </h1>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Enter your email"
                  value={LoginData.Email}
                  required
                  onChange={handleLoginData}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>



              <div>
                <label
                  htmlFor="Password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="Password"
                  placeholder="Enter password"
                  value={LoginData.Password}
                  required
                  onChange={handleLoginData}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
              >
                Login
              </button>
             <div className="text-center">
                <h1>New here ?</h1>
                <button type="button" onClick={() => setIsRegistered(false)} className="font-bold text-blue-600">Register</button>
              </div>

            </form>
          </div>
                    {/* Register Card */}
          <div className="flex flex-col justify-center bg-white px-4 shadow-2xl min-w-100 max-h-140">

            <h1 className="text-4xl font-bold text-center text-gray-800 m-0.5">
              Register
            </h1>

            <form className="space-y-5">

              <div>
                <label
                  htmlFor="Username"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="username"
                  name="Username"
                  placeholder="Enter your name"
                  value={RegisterData.Username}
                  required
                  onChange={handleData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="Enter your email"
                  value={RegisterData.Email}
                  required
                  onChange={handleData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="PhoneNumber"
                  pattern="[0-9]{10}"
                  placeholder="Enter phone number"
                  value={RegisterData.PhoneNumber}
                  required
                  onChange={handleData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="Password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="Password"
                  placeholder="Enter password"
                  value={RegisterData.Password}
                  required
                  onChange={handleData}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
              >
                Create Account
              </button>
              <div className="text-center">
                <h1>Already registered ?</h1>
                <button type="button" onClick={() => setIsRegistered(true)} className="font-bold text-blue-600">Log in</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;