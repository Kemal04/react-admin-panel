import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    //CURRENT USER SECTION
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    //LOGIN SECTION
    const login = () => {
        setCurrentUser({
            id: 1,
            name: "Kemal",
            email: "kemalhojayew04@gmail.com",
        });
    };

    //SET LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};