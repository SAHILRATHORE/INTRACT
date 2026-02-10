import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

const Messages = () => {
useGetRealTimeMessage();
  useGetMessages();
  const { messages } = useSelector((store) => store.message);
  const { selectedUser } = useSelector((store) => store.user);

  // 1️⃣ No user selected
  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#FFF6E5]">
        <h1 className="text-2xl font-bold text-gray-500">
          💬 Let’s start chatting
        </h1>
      </div>
    );
  }

  // 2️⃣ User selected but messages NOT loaded yet or null
  if (!messages) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#FFF6E5]">
        <h1 className="text-xl text-black font-semibold">
          let's start conversation with 
        </h1>
        <span className="text-[#296994] font-extrabold text-3xl">{selectedUser?.fullname}</span>
      </div>
    );
  }

  // 3️⃣ User selected but no conversation
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#FFF6E5] text-center">
        <h1 className="text-2xl font-bold text-gray-500">
          👋 Let’s start a conversation with <br />
          <span className="capitalize text-black">
            {selectedUser.fullname}
          </span>
        </h1>
      </div>
    );
  }

  // 4️⃣ Messages exist
  return (
    <div className="flex-1 p-2 overflow-y-auto bg-[#FFF6E5]">
      {messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
