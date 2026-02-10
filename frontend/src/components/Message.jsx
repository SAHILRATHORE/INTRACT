import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Message = ({ message }) => {
  const scroll = useRef();
  const { authuser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div ref={scroll} className="p-2 space-y-2 overflow-y-auto bg-[#FFF6E5]">
      <div
        className={`chat ${authuser?._id === message?.senderId ? "chat-end" : "chat-start"}`}
      >
        <div
          className={`${authuser?._id === message?.senderId ? "bg-[#A3E635]" : "bg-white"} border-2 border-black rounded-2xl shadow-[3px_3px_0px_#000] p-2 text-black max-w-fit`}
        >
          {message?.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
