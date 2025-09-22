// File: src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create the provider component that will wrap our app
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // e.g., { name: 'Alice' } or null

    const login = (username) => setUser({ name: username });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3. Create a custom hook for easy access
export function useAuth() {
    return useContext(AuthContext);
}