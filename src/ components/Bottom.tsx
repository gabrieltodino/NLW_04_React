import Switch from 'react-switch'

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { LogInContext } from '../contexts/LogInContext';

import { signOut } from 'next-auth/client'
import { BottomContainer } from '../styles/components/BottomBox';

export function Bottom (props) {
    const themeContext = useContext(ThemeContext);
    const { logout } = useContext(LogInContext)

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
        logout()
      }

    return (
        <BottomContainer>
            <a 
                href="#" 
                onClick={handleSignout}  
            >
                Sign Out
            </a>
            <Switch
                onChange={props.toggleTheme}
                checked={themeContext.title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor={"#5965e0"}
                onColor={"#61bfe8"}
            />
        </BottomContainer>
    )
}