# whatsapp-web-clone

## This project is a real-time messaging application similar to WhatsApp Web, built with React.js, InstantDB, and IndexedDB. It features a contact list on the left and a chat window on the right. The app supports sending and receiving messages, and uses InstantDB for real-time message storage and retrieval, as well as IndexedDB to provide offline capabilities.

## Features
- Contact List: Display a list of contacts on the left side of the screen.
- Chat Window: Display the chat history of the selected contact on the right.
- Real-Time Messaging: Use InstantDB to store and retrieve messages in real-time.
- Offline Mode: Messages are stored in IndexedDB for offline access.
- Message Input: A text input to send new messages.
- Responsive Design: The app is designed to be responsive and looks good on various screen sizes.
- Technologies Used
- React.js: For building the user interface with hooks and state management.
- InstantDB: A real-time database service used to store and retrieve messages.
- IndexedDB: For local storage and offline support.
- CSS: For styling the app with responsive design techniques, Flexbox/Grid, animations, and transitions.
- useState and useEffect: For managing component state and side effects.
- useReducer: For managing the state of contacts and messages in a centralized way.
- React Context: To globally manage the state of contacts and messages.
- Custom Hooks: For reusable logic, such as interacting with InstantDB and IndexedDB.
## Setup
1. Clone the repository
Clone this repository to your local machine using the following command:

git clone https://github.com/Summi51/whatsapp-web-clone
2. Install Dependencies
Navigate to the project folder and install the required dependencies:

cd whatsapp-web-app
npm install

3. Set up InstantDB
Create an account on InstantDB.
Create a new project and retrieve the API key.
Add your InstantDB API key in the .env file (you may need to create this file if it doesn't exist):
REACT_APP_INSTANTDB_API_KEY=your-instantdb-api-key

4. Run the Application
After setting up the environment, run the app using:

npm start
The app will be available at http://localhost:3000.

5. Deploy to Production (Optional)
You can deploy your app using platforms like Netlify, Vercel, or Firebase. Follow the instructions on their respective websites to deploy your React app.

Application Structure
bash
Copy code
/src
  /components
    /ContactList.js       # Displays the list of contacts.
    /ChatWindow.js        # Displays the chat history and message input field.
    /Message.js           # Represents individual messages.
    /MessageInput.js      # Text input for sending messages.
  /context
    /ChatContext.js       # Provides global state management using React Context.
  /hooks
    /useInstantDB.js      # Custom hook for interacting with InstantDB.
    /useIndexedDB.js      # Custom hook for interacting with IndexedDB.
  /utils
    /instantdb.js         # Helper functions for interacting with InstantDB.
    /indexeddb.js         # Helper functions for interacting with IndexedDB.
  /App.js                 # Main component that ties everything together.
  /index.js               # Entry point of the React app.
  
## Key Concepts
- React Hooks
- useState: For managing local component state, such as the selected contact and message input.
- useEffect: For fetching contacts and messages when the component mounts and updating when the state changes.
- useReducer: Used for managing the global state of contacts and messages.
- useContext: For global state management using React Context API.
- Custom Hooks
- useInstantDB: This hook handles all interactions with InstantDB. It includes methods for saving messages and retrieving them in real-time.
- useIndexedDB: This hook manages data storage in IndexedDB, ensuring that messages and contacts are available offline.
- IndexedDB
IndexedDB is used for local storage to ensure that users can still view and send messages even when they are offline. The app syncs messages to InstantDB when an internet connection is available.
- InstantDB
InstantDB is used for real-time message synchronization. Whenever a message is sent, it is stored in InstantDB and can be retrieved immediately by other users in real time.
- Challenges Faced
Real-time Data Sync: Ensuring that messages were instantly reflected across all clients in real-time was a challenge. This was achieved by using InstantDB's real-time capabilities.
Offline Support: Implementing IndexedDB for offline data storage was challenging, as I had to ensure that data was saved locally and synced correctly once the app came back online.
State Management: Managing the state of contacts and messages globally was challenging initially. I used useReducer combined with Context API to create a scalable and efficient solution.
Future Improvements
Message Notifications: Implementing push notifications when new messages arrive.
User Authentication: Adding user authentication (e.g., email/password or OAuth) to manage users.
Group Chats: Adding support for group chats, where multiple contacts can interact in a single chat window.
Demo
You can check out the live demo of the application here - https://dreamy-salmiakki-00e9e6.netlify.app/ 
