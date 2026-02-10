import React, { useState } from "react";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-72 flex flex-col border-r-4 border-black bg-[#FFE5EC] shadow-[4px_0px_0px_#000]">

      {/* Search */}
      <div className="p-4 border-b-4 border-black">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search user"
          className="input w-full bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] hover:translate-y-1 hover:shadow-none transition"
        />
      </div>

      {/* User List */}
      <OtherUsers search={search} />

      {/* Logout */}
      <div className="p-4 border-t-4 border-black">
        <button
          onClick={logoutHandler}
          className="btn w-full bg-[#FB7185] border-2 shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] border-black hover:text-white text-black font-bold hover:translate-y-1 hover:shadow-none transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
