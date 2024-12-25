const contactReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            return { ...state, contacts: action.payload };
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.contact]: [
                        ...(state.messages[action.payload.contact] || []),
                        action.payload.message,
                    ],
                },
            };
        default:
            return state;
    }
};

export default contactReducer;