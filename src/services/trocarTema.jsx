import React, { createContext, useEffect, useState } from "react";

export const themes = {

    light: {
        primaria: { colorPrimaria: 'black', backgroundPrimaria: 'gray', borderPrimaria: 'solid 1px white' },
        secundaria: { colorSecundaria: 'white', backgroundSecundaria: 'lightgray', borderSecundaria: 'solid 1px white' },
        especificos: { imagemPokemonBg: '#89FF7F', fundoPokedex: '#F46646' }
    }

    ,
    dark: {
        primaria: { colorPrimaria: 'white', backgroundPrimaria: 'lightgray', borderPrimaria: 'solid 1px black' },
        secundaria: { colorSecundaria: 'black', backgroundSecundaria: 'gray', borderSecundaria: 'solid 1px black' },
        especificos: { imagemPokemonBg: 'rgb(4, 73, 4)', fundoPokedex:  'rgb(146, 55, 38)' }
    }
}

export const ThemeContext = createContext({
    theme: 'light',
    updateTheme: () => { }

});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const updateTheme = (newTheme) => {

        setTheme(newTheme)
    }

    return (

        <ThemeContext.Provider value={{ theme, updateTheme }}>
                {props.children}
        </ThemeContext.Provider>
    )
}
