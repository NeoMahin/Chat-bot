import { useState } from "react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  
  const handleSubmit = () => {
    if (message.trim() !== "") {

      setMessages((prevMessages) => [...prevMessages, { text: message, sender: "user" }]);
      

      setMessage("");

      let botResponse = "Please be more specific.";

      if (message.toLowerCase().includes("question")) {
        botResponse = "Sure! What is your question?";
      } else if (message.toLowerCase().includes("help")) {
        botResponse = "I'm here to help you! What do you need?";
      } else if (message.toLowerCase().includes("hello")) {
        botResponse = "Hi there! How can I help you?";
      }else if (message.toLowerCase().includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
      }else if (message.toLowerCase().includes("whats your name")) {
        botResponse = "I dont have a name.";
      }else if (message.toLowerCase().includes("time")) {
        botResponse = "It's " + new Date().toLocaleTimeString();
      }else  if (message.toLowerCase().includes("date")) {
        botResponse = "It's " + new Date().toLocaleDateString();
      }else if (message.toLowerCase().includes("what are you")) {
        botResponse = "I am a test bot.";
      }else if (message.toLowerCase().includes("how are you")) {
        botResponse = "I am doing well. How about you?";
      }else if (message.toLowerCase().includes("thank you")) {
        botResponse = "You're welcome!";
      }else if (message.toLowerCase().includes("say my name")) {
        botResponse = "You're Heisenberg";
      }


      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot" }]);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="main-container flex flex-col bg-gradient-to-r w-full from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex-1 overflow-hidden shadow-lg">
        <div className="p-6 border-b-2 border-white text-white text-xl font-semibold text-center">
          Test AI
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl max-w-xs shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white self-start"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t-2 border-white bg-white flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
