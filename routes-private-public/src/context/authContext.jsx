import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";
export const AuthContext = createContext(null)


export const AuthUser = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {})

    return (
        <AuthContext.Provider value={{ 
            isLogged: true, 
            dispatch,
            state 
            }}>

            {children}
        
        </AuthContext.Provider>
    )
}