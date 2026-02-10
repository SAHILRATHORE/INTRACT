import React, { useEffect } from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const ChatBox = () => {
  const { selectedUser, authuser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    return () => dispatch(setSelectedUser(null))
  },[dispatch]);

  // 🔴 NO USER SELECTED
  if (!selectedUser) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#FFF6E5]">
         <span  className="text-[#236794] font-extrabold text-3xl">Hii {authuser?.fullname}</span>
        <h1 className="text-2xl font-bold text-gray-500">
          💬 Let’s start chatting
        </h1>
      </div>
    );
  }

  // 🟢 USER SELECTED
  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="h-16 flex gap-3 items-center px-6 border-b-4 border-black bg-[#E0F2FE] shadow-[0_4px_0px_#000]">
        <div className="border-2 border-black rounded-full w-10 h-10 overflow-hidden">
          <img
            src={selectedUser.profilePhoto}
            alt={selectedUser.fullname}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-extrabold text-black capitalize">
          {selectedUser.fullname}
        </h1>
      </div>

      {/* Messages */}
      <Messages />

      {/* Send Input */}
      <SendInput />
    </div>
  );
};

export default ChatBox;
