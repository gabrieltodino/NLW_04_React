import { ContainerDarkMode } from '../styles/components/ChangeColorTheme'
import Switch from 'react-switch'

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function ChangeColorTheme (props) {
    const themeContext = useContext(ThemeContext);

    return (
        <ContainerDarkMode>
            <Switch
                onChange={props.toggleTheme}
                checked={themeContext.title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor={"#5965e0"}
                onColor={"#61bfe8"}
            />
        </ContainerDarkMode>
    )
}