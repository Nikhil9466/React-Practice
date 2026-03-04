import React from "react";
import UserContext from "./userContext.js";


const ContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider >
    );
};

export default ContextProvider;