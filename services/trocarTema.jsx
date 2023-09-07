import { createContext, useState } from "react"


export const themes = {

    light: { color: 'black', background: 'gray', border: 'solid 1px black' },
    dark: { color: 'white', background: 'black', border: 'solid 1px white' }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light);

    return (

        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
