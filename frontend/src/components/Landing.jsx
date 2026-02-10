import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10"></div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
        <div className="text-2xl sm:text-3xl font-extrabold text-[#FFD700] animate-bounce-slow flex items-center gap-2">
          🌟 Interact
        </div>
        <div className="flex gap-2 sm:gap-4">
          <Link to="/login">
            <button className="btn bg-transparent border-2 border-white text-white font-bold rounded-lg sm:rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn bg-[#FFD700] border-2 sm:border-4 border-white text-black font-bold rounded-lg sm:rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2 shadow-[2px_2px_0px_rgba(255,255,255,0.5)] sm:shadow-[4px_4px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-y-1 transition-all duration-200 hover:text-white">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto w-full">
          {/* Left side - Text */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Connect Instantly, Chat Forever 🚀
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed drop-shadow-md bg-black/30 p-4 rounded-xl">
              Experience real-time conversations with an intuitive chat interface. 
              Connect with friends, share moments, and stay in touch instantly. 
              No delays, no complications—just pure connection.
            </p>

            {/* Feature highlights */}
            <div className="space-y-2 sm:space-y-3 pt-4">
              <div className="flex items-start sm:items-center gap-3 group bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <span className="text-xs sm:text-sm lg:text-base text-white font-semibold">Lightning-fast real-time messaging</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 group bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">👥</div>
                <span className="text-xs sm:text-sm lg:text-base text-white font-semibold">See who's online instantly</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 group bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">🔒</div>
                <span className="text-xs sm:text-sm lg:text-base text-white font-semibold">Secure and private conversations</span>
              </div>
              <div className="flex items-start sm:items-center gap-3 group bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">💾</div>
                <span className="text-xs sm:text-sm lg:text-base text-white font-semibold">Persistent message history</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-8">
              <Link to="/register" className="w-full sm:w-auto">
                <button className="btn w-full bg-[#FFD700] border-2 sm:border-4 border-white text-black font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_rgba(255,255,255,0.5)] sm:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:translate-y-1 hover:shadow-[1px_1px_0px_rgba(255,255,255,0.5)] sm:hover:shadow-[3px_3px_0px_rgba(255,255,255,0.5)] transition-all duration-200 hover:text-white">
                  🚀 Start Chatting
                </button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <button className="btn w-full bg-white border-2 sm:border-4 border-white text-black font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_rgba(255,255,255,0.5)] sm:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:translate-y-1 hover:shadow-[1px_1px_0px_rgba(255,255,255,0.5)] sm:hover:shadow-[3px_3px_0px_rgba(255,255,255,0.5)] transition-all duration-200 hover:text-white">
                  Sign In
                </button>
              </Link>
            </div>
          </div>

          {/* Right side - Animated Chat Preview (Hidden on small screens) */}
          <div className="hidden lg:flex relative animate-fade-in-right">
            <div className="bg-white/90 backdrop-blur-sm border-2 sm:border-4 border-white rounded-2xl sm:rounded-3xl shadow-[4px_4px_0px_rgba(255,255,255,0.5)] sm:shadow-[8px_8px_0px_rgba(255,255,255,0.5)] overflow-hidden w-full">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-[#1E40AF] to-[#FFD700] text-white p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white animate-pulse"></div>
                  <div>
                    <p className="font-bold text-xs sm:text-base">Sarah Tech</p>
                    <p className="text-[10px] sm:text-xs text-white/80">Online 🟢</p>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 h-64 sm:h-96 overflow-y-auto bg-white message-animation">
                {/* Incoming message */}
                <div className="chat chat-start">
                  <div className="chat-bubble bg-gray-200 border-2 border-gray-400 rounded-lg sm:rounded-2xl shadow-[1px_1px_0px_rgba(0,0,0,0.1)] sm:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] text-black text-xs sm:text-base animate-slide-up" style={{animationDelay: "0.1s"}}>
                    Hey! How are you? 👋
                  </div>
                </div>

                {/* Outgoing message */}
                <div className="chat chat-end">
                  <div className="chat-bubble bg-[#FFD700] border-2 border-[#FFA500] rounded-lg sm:rounded-2xl shadow-[1px_1px_0px_rgba(0,0,0,0.1)] sm:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] text-black text-xs sm:text-base animate-slide-up" style={{animationDelay: "0.3s"}}>
                    I'm doing great! 🎉
                  </div>
                </div>

                {/* Incoming message */}
                <div className="chat chat-start">
                  <div className="chat-bubble bg-gray-200 border-2 border-gray-400 rounded-lg sm:rounded-2xl shadow-[1px_1px_0px_rgba(0,0,0,0.1)] sm:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] text-black text-xs sm:text-base animate-slide-up" style={{animationDelay: "0.5s"}}>
                    Want to chat later?
                  </div>
                </div>

                {/* Outgoing message */}
                <div className="chat chat-end">
                  <div className="chat-bubble bg-[#FFD700] border-2 border-[#FFA500] rounded-lg sm:rounded-2xl shadow-[1px_1px_0px_rgba(0,0,0,0.1)] sm:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] text-black text-xs sm:text-base animate-slide-up" style={{animationDelay: "0.7s"}}>
                    Absolutely! 😊
                  </div>
                </div>
              </div>

              {/* Chat input */}
              <div className="p-3 sm:p-4 border-t-2 sm:border-t-4 border-gray-300 bg-white flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input flex-1 bg-gray-100 border-2 border-gray-400 rounded-lg sm:rounded-xl text-xs sm:text-base text-black placeholder-gray-500 focus:outline-none"
                  disabled
                />
                <button className="btn bg-[#FFD700] border-2 border-[#FFA500] rounded-lg sm:rounded-xl font-bold text-xs sm:text-base text-black hover:shadow-md transition-shadow hover:text-white">
                  Send
                </button>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 text-4xl sm:text-6xl animate-float">💬</div>
            <div className="absolute -bottom-6 -left-6 text-4xl sm:text-6xl animate-float-delayed">✨</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-8 sm:mb-16 animate-fade-in drop-shadow-lg">
          Why Choose Interact?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Feature 1 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 sm:border-4 border-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[3px_3px_0px_rgba(255,255,255,0.5)] sm:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:shadow-[4px_4px_0px_#FFD700] sm:hover:shadow-[8px_8px_0px_#FFD700] hover:translate-y-[-2px] sm:hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#1E40AF] mb-4">Real-Time Chat</h3>
            <p className="text-xs sm:text-base text-gray-700">Messages delivered instantly using Socket.io technology for seamless communication.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 sm:border-4 border-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[3px_3px_0px_rgba(255,255,255,0.5)] sm:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:shadow-[4px_4px_0px_#FFD700] sm:hover:shadow-[8px_8px_0px_#FFD700] hover:translate-y-[-2px] sm:hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">👥</div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#1E40AF] mb-4">Online Status</h3>
            <p className="text-xs sm:text-base text-gray-700">Know exactly who's online with real-time presence indicators and status updates.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/90 backdrop-blur-sm border-2 sm:border-4 border-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[3px_3px_0px_rgba(255,255,255,0.5)] sm:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:shadow-[4px_4px_0px_#FFD700] sm:hover:shadow-[8px_8px_0px_#FFD700] hover:translate-y-[-2px] sm:hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">💾</div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#1E40AF] mb-4">Message History</h3>
            <p className="text-xs sm:text-base text-gray-700">All conversations are saved automatically so you never miss important messages.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <div className="bg-gradient-to-r from-[#1E40AF]/95 to-[#FFD700]/95 backdrop-blur-sm border-2 sm:border-4 border-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-[4px_4px_0px_rgba(255,255,255,0.5)] sm:shadow-[8px_8px_0px_rgba(255,255,255,0.5)]">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Ready to Connect?</h2>
          <p className="text-sm sm:text-lg text-white mb-8 drop-shadow-md">
            Join thousands of users enjoying seamless real-time messaging right now!
          </p>
          <Link to="/register">
            <button className="btn bg-white border-2 sm:border-4 border-white text-black font-bold text-sm sm:text-lg rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_rgba(255,255,255,0.5)] sm:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-y-1 hover:text-white transition-all duration-200 px-6 sm:px-8 py-2 sm:py-3">
              🚀 Get Started Free
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm text-white text-center py-6 sm:py-8 border-t-2 sm:border-t-4 border-white mt-12 sm:mt-20">
        <p className="font-bold text-xs sm:text-lg drop-shadow-lg">🌟 Interact © 2026 | Real-Time Chat Made Simple</p>
      </footer>
    </div>
  );
};

export default Landing;
