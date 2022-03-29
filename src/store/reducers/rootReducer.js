import React from 'react';
const initState = {
    users: [
        { id: 1, name: 'Ronaldo' },
        { id: 2, name: 'Messi' },
        { id: 3, name: 'Neymar' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        // break;
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        // break;
        default:
            return state;
    }

}

export default rootReducer;