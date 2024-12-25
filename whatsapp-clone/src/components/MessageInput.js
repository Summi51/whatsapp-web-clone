import React, { useContext, useState } from 'react';
import ContactContext from '../context/ContactContext';
import useInstantDB from '../hooks/useInstantDB';
import './MessageInput.css';

const MessageInput = ({ contact }) => {
    const [message, setMessage] = useState('');
    const { dispatch } = useContext(ContactContext);
    const { sendMessage } = useInstantDB();

    const handleSend = async () => {
        const newMessage = { text: message, timestamp: Date.now() };
        await sendMessage(contact.id, newMessage);
        dispatch({ type: 'ADD_MESSAGE', payload: { contact: contact.id, message: newMessage } });
        setMessage('');
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default MessageInput;