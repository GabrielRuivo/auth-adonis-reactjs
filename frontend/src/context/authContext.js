import React, { useState } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [data, setData] = useState('');

    return (
        <AuthContext.Provider value={[data, setData]} >
            {children}
        </AuthContext.Provider>
    )

}