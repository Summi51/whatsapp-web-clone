import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
    return (
        <ContactProvider>
            <div className="app-container">
                <ContactList />
                <ChatWindow />
            </div>
        </ContactProvider>
    );
}

export default App;