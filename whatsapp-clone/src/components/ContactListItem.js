import React from "react";
import { useMessages } from "../hooks/useInstantDB"; 

function ContactListItem({ contact, isSelected, onSelect }) {
  // Get the last message for this contact
  const { lastMessage } = useMessages(contact.id);

  return (
    <div 
      onClick={() => onSelect(contact)} 
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "12px",
        borderRadius: "8px",
        backgroundColor: isSelected ? "#d1fae5" : "#f0fdf4", // Teal background for selected
        transition: "background-color 0.3s ease",
        marginBottom: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ fontWeight: "600", fontSize: "1rem", marginBottom: "4px" }}>
          {contact.name}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          {lastMessage.text || "No messages"}
        </p>
      </div>
    </div>
  );
}

export default ContactListItem;
