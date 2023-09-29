import React, { createContext, useEffect, useState } from "react";

export const themes = {

    light: {
        primaria: { colorPrimaria: 'black', backgroundPrimaria: 'gray', borderPrimaria: 'solid 1px black' },
        secundaria: { colorSecundaria: 'white', backgroundSecundaria: 'light-gray', borderSecundaria: 'solid 1px black' },
        especificos: { imagemPokemonBg: '#89FF7F', fundoPokedex: '#F46646' }
    }

    ,
    dark: {
        primaria: { colorPrimaria: 'white', backgroundPrimaria: 'light-gray', borderPrimaria: 'solid 1px white' },
        secundaria: { colorSecundaria: 'black', backgroundSecundaria: 'gray', borderSecundaria: 'solid 1px white' },
        especificos: { imagemPokemonBg: 'green', fundoPokedex: 'tomato' }
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
