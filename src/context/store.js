import React from 'react';

export const Store = React.createContext({
    user: {
        isLogged: false,
        name: null,
        idToken: null
    }
});