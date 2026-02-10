import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {setAuthUser} from "../redux/userSlice";


const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/user/login`, user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials:true
        });
        if (res.data.success) {
            toast.success(res.data.message);
            dispatch(setAuthUser({
              _id: res.data._id,
              username: res.data.username,
              fullname: res.data.fullname,
              profilePhoto: res.data.profilePhoto
            }));
            navigate("/home");
        }
    } catch (error) {
        toast.error(error.response.data.message)
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8" style={{backgroundImage: 'url(/istockphoto-1403848173-612x612.jpg)'}}>
      <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-black bg-[#E0F2FE] shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000]">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-black drop-shadow-lg">
          🔐 Login
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-4 sm:space-y-5">
          {/* Username */}
          <div>
            <label className="block mb-1 font-bold text-black text-sm sm:text-base">Username</label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="your_username"
              className="input w-full bg-white border-2 border-black rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-bold text-black text-sm sm:text-base">Password</label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="••••••••"
              className="input w-full bg-white border-2 border-black rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-black text-sm sm:text-base"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full mt-6 bg-[#FACC15] border-2 sm:border-4 border-black text-black font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:translate-y-1 hover:text-white hover:shadow-none transition"
          >
            🚀 Login
          </button>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <p className="font-semibold text-black text-sm">Don't have an account?</p>
            <Link to="/register">
              <button className="btn btn-sm mt-2 bg-[#FB7185] border-2 border-black text-black rounded-lg sm:rounded-xl hover:text-white text-xs sm:text-sm">
                Signup 👉
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
