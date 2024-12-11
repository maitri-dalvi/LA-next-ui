"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const FloatingChatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div>
      {/* Floating Icon */}
      <div
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-white rounded-full p-3 shadow-lg hover:scale-105 transition-transform cursor-pointer"
      >
        <MessageCircle size={30} />
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div
          className={`fixed ${
            isMaximized
              ? "bottom-0 right-0 w-full h-full"
              : "bottom-16 right-6 w-80 h-96"
          } max-w-screen max-h-screen bg-white border rounded-lg shadow-lg flex flex-col transition-all overflow-hidden`}
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 bg-[#D4AF37] text-white rounded-t-lg">
            <h2 className="text-sm font-bold">Chatbot</h2>
            <div className="flex space-x-2">
              {/* Maximize/Minimize Button */}
              <button
                onClick={toggleMaximize}
                className="text-white text-lg hover:scale-110 transition-transform"
              >
                {isMaximized ? "🔻" : "🔺"} {/* Toggle icon */}
              </button>
              {/* Close Button */}
              <button
                onClick={toggleChat}
                className="text-white text-lg hover:scale-110 transition-transform"
              >
                ✖
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-grow p-4 overflow-y-auto">
            <p className="text-gray-700 text-sm">
              Hello! How can I assist you today?
            </p>
            {/* Add chat messages or UI components here */}
          </div>

          {/* Input Field */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatbot;
