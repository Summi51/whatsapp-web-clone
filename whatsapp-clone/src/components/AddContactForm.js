import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AddContactForm = ({ onContactAdded }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Both fields are required.");
      return;
    }

    const newContact = { name, phone };

    onContactAdded(newContact);
    setName("");
    setPhone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
        Add New Contact
      </h2>
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#4A5568",
            marginBottom: "8px",
          }}
        >
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #CBD5E0",
            borderRadius: "4px",
          }}
          placeholder="Enter name"
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "500",
            color: "#4A5568",
            marginBottom: "8px",
          }}
        >
          Phone
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #CBD5E0",
            borderRadius: "4px",
          }}
          placeholder="Enter phone number"
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          background: "#38A169",
          color: "white",
          padding: "8px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#2F855A")}
        onMouseLeave={(e) => (e.target.style.background = "#38A169")}
      >
        Save Contact
      </button>
    </form>
  );
};

export default AddContactForm;
