import React, { useContext, useEffect } from "react";
import ContactContext from "../context/ContactContext";
import useInstantDB from "../hooks/useInstantDB";
import "./ContactList.css";

const ContactList = () => {
  const { state, dispatch } = useContext(ContactContext);
  const { getContacts } = useInstantDB();

  useEffect(() => {
    (async () => {
      const contacts = await getContacts();
      dispatch({ type: "SET_CONTACTS", payload: contacts });
    })();
  }, [dispatch, getContacts]);

  return (
    <div className="contact-list">
      {state.contacts.map((contact) => (
        <div key={contact.id} className="contact-item">
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
