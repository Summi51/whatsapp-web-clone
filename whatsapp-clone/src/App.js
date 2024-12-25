import React, { useEffect, useState, useRef } from "react";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import { AppProvider, useAppContext } from "./context/AppContext";
import {
  getContacts,
  saveContact,
  deleteAllDataWithConfirmation,
} from "./utils/instantdb";
import AddContactForm from "./components/AddContactForm";
import "./index.css";

function App() {
  const { state, dispatch } = useAppContext();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const contactsFetched = useRef(false); // To prevent double fetch on refresh

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Fetch contacts from IndexedDB when the component mounts
  useEffect(() => {
    const fetchContactsFromDB = async () => {
      const contacts = await getContacts();

      // If contacts are fetched from IndexedDB and they are not yet in state
      if (contacts.length > 0 && state.contacts.length === 0) {
        dispatch({ type: "SET_CONTACTS", payload: contacts });
      }
    };

    if (!contactsFetched.current) {
      fetchContactsFromDB();
      contactsFetched.current = true;
    }
  }, [dispatch, state.contacts.length]);

  // Add new contact and update the state immediately to reflect changes
  const handleSaveContact = async (newContact) => {
    // Prevent adding duplicate contact by checking if it already exists
    const existingContact = state.contacts.find(
      (contact) => contact.phone === newContact.phone
    );
    if (existingContact) {
      alert("This contact already exists!");
      return;
    }

    // Update the context state with the new contact
    dispatch({
      type: "SET_CONTACTS",
      payload: [...state.contacts, newContact], // Update context state directly
    });

    // Save the new contact to IndexedDB
    await saveContact(newContact);

    // Close the form after saving the contact
    setIsFormVisible(false);
  };

  const handleDeleteAll = async () => {
    await deleteAllDataWithConfirmation(); // Assuming this function clears the IndexedDB
    dispatch({ type: "SET_CONTACTS", payload: [] }); // Clear the context state to reflect the update
  };

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f0f2f5" }}>
      {/* Left Sidebar - Contact List */}
      <div
        style={{
          width: "30%",
          backgroundColor: "white",
          borderRight: "1px solid #ddd",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <button
          onClick={toggleFormVisibility}
          style={{
            backgroundColor: "#25d366",
            color: "white",
            padding: "10px 20px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Contact
        </button>
        {/* Show AddContactForm only if isFormVisible is true */}
        {isFormVisible && <AddContactForm onContactAdded={handleSaveContact} />}

        <div style={{ overflowY: "auto", maxHeight: "calc(100vh - 100px)" }}>
          <ContactList contacts={state.contacts} />
        </div>
      </div>

      {/* Right Chat Window */}
      <div style={{ flex: "1", backgroundColor: "#e9edf0", display: "flex", flexDirection: "column" }}>
        <ChatWindow />
      </div>
    </div>
  );
}

function AppWithProvider() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default AppWithProvider;
