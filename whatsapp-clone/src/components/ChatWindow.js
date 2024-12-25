import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

const ChatWindow = () => {
  const { state } = useAppContext();
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (messageText.trim()) {
      const newMessage = { text: messageText, sender: "You", timestamp: new Date().toISOString() };
      setMessages([...messages, newMessage]);
      setMessageText("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "10px",
          background: "#008069",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        {state.selectedContact?.name || "Select a Contact"}
      </div>
      <div
        style={{
          flex: "1",
          padding: "10px",
          overflowY: "auto",
          background: "#e9edf0",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ textAlign: "center", color: "#aaa" }}>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                textAlign: msg.sender === "You" ? "right" : "left",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "10px",
                  borderRadius: "10px",
                  background: msg.sender === "You" ? "#dcf8c6" : "#fff",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                  maxWidth: "70%",
                }}
              >
                <span>{msg.text}</span>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <div
        style={{
          padding: "10px",
          background: "white",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message"
          style={{
            flex: "1",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ddd",
            marginRight: "10px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "50%",
            background: "#008069",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
