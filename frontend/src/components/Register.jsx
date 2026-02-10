import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/user/register`, user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials:true
        });
        
        if (res.data.success) {
            toast.success(res.data.message);
            navigate("/login");
        }
    } catch (error) {
        toast.error(error.response.data.message)
    }
    setUser({
      fullname: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8" style={{backgroundImage: 'url(/istockphoto-1403848173-612x612.jpg)'}}>
      <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-black bg-[#FFE5EC] shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-black drop-shadow-lg">
          Signup
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-bold text-black text-sm sm:text-base">Full Name</label>
            <input
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              type="text"
              placeholder="Your name"
              className="input w-full text-black bg-white border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block mb-1 font-bold text-black text-sm sm:text-base">Username</label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="cool_username"
              className="input w-full text-black bg-white border-2 border-black rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-bold text-black">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="••••••••"
              className="input w-full bg-white text-black border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-bold text-black">
              Confirm Password
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="••••••••"
              className="input w-full bg-white border-2 text-black border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Gender */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-black">Gender</span>

            <div className="flex gap-4">
              <label className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  className="radio border-2 border-black"
                />
                Male
              </label>

              <label className="flex items-center gap-2 font-semibold">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  className="radio border-2 border-black"
                />
                Female
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn w-full mt-6 bg-[#A3E635] border-4 border-black text-black font-bold text-lg rounded-2xl shadow-[4px_4px_0px_#000] hover:translate-y-1 hover:shadow-none transition hover:text-white"
          >
            🚀 Create Account
          </button>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="font-semibold text-black">Already have an account?</p>
            <Link to="/login">
              <button className="btn btn-sm mt-2 bg-[#60A5FA] border-2 border-black text-black rounded-xl hover:text-white">
                Login 👉
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
