import { createContext, ReactNode, useEffect, useState } from "react";

interface LogInContextData {
    loginState: boolean;
    changeLogin: (val: string) => void;
}

interface LogInProviderProps {
    children: ReactNode;
}

export const LogInContext = createContext({} as LogInContextData)

export function LogInProvider({ children }: LogInProviderProps) {
    const [loginState, setLoginState] = useState(false)

    function changeLogin(val: string) {
        if( val !== "" ) {
            setLoginState(true)
            console.log(loginState)
        }
    }

    return (
        <LogInContext.Provider value={{
            loginState,
            changeLogin,
        }}>
            {children}
        </LogInContext.Provider>
    )
}