import { createContext } from 'react';

const initialState = {
    firtName: '',
    lastName: '',
    email: '',
    password: '',
    roles: [],
    accessToken: ''
}

export const AuthContext = createContext(initialState);
