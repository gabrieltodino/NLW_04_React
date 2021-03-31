import { createContext, ReactNode } from "react";
import usePersistedState from '../utils/usePersistedState'

interface LogInContextData {
    loginState: {state: boolean, user: object};
    changeLogin: (val: string) => void;
    logout: () => void;
}

interface LogInProviderProps {
    children: ReactNode;
}

export const LogInContext = createContext({} as LogInContextData)

export function LogInProvider({ children }: LogInProviderProps) {
    const [loginState, setLoginState] = usePersistedState({
        state:false,
        user: {
            email: "",
            image: "",
            name: ""
        }
    }, 'logged');

    function changeLogin(val: string) {
        if( val !== "" ) {
            setLoginState({
                state:true,
                user: {
                    email: "",
                    image: "",
                    name: val
                }
            })
        }
    }

    function logout() {
        setLoginState({
            state:false,
            user: {
                email: "",
                image: "",
                name: ""
            }
        })
    }

    return (
        <LogInContext.Provider value={{
            loginState,
            changeLogin,
            logout,
        }}>
            {children}
        </LogInContext.Provider>
    )
}