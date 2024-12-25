import React, { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

const ChatWindow = () => {
  const { state } = useContext(ContactContext);
  const [selectedContact, setSelectedContact] = useState(null);

  const messages = selectedContact
    ? state.messages[selectedContact.id] || []
    : [];

  return (
    <div className="chat-window">
      <div className="chat-header">
        {selectedContact ? selectedContact.name : "Select a Contact"}
      </div>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg.text}
          </div>
        ))}
      </div>
      {selectedContact && <MessageInput contact={selectedContact} />}
    </div>
  );
};

export default ChatWindow;
