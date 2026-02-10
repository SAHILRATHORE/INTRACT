import React from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center p-4" style={{backgroundImage: 'url(/istockphoto-1403848173-612x612.jpg)'}}>
      <div className="h-[90vh] w-full max-w-[90vw] sm:max-w-[85vw] lg:max-w-[75vw] border-2 border-black shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] overflow-hidden rounded-2xl flex bg-[#FFF6E5]">
        <Sidebar />
        <ChatBox />
      </div>
    </div>
  );
};

export default HomePage;
