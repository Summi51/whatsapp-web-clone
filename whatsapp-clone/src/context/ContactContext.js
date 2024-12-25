import React, { createContext, useReducer } from 'react';
import contactReducer from '../reducers/contactReducer';

const ContactContext = createContext();
const initialState = { contacts: [], messages: {} };

export const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContext;