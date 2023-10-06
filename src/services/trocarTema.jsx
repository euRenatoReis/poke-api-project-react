import React, { createContext, useEffect, useState } from "react";

export const themes = {

    light: {
        primaria: { colorPrimaria: 'black', backgroundPrimaria: 'gray', borderPrimaria: 'solid 1px white' },
        secundaria: { colorSecundaria: 'white', backgroundSecundaria: 'lightgray', borderSecundaria: 'solid 1px white' },
        especificos: { imagemPokemonBg: '#89FF7F', fundoPokedex: '#F46646', fundoImagem: '../public/imagens/fundo_dia.jpg' }
    }

    ,
    dark: {
        primaria: { colorPrimaria: 'white', backgroundPrimaria: 'lightgray', borderPrimaria: 'solid 1px black' },
        secundaria: { colorSecundaria: 'black', backgroundSecundaria: 'gray', borderSecundaria: 'solid 1px black' },
        especificos: { imagemPokemonBg: 'rgb(4, 73, 4)', fundoPokedex: 'rgb(146, 55, 38)', fundoImagem: '../public/imagens/night_sky.png' }
    }
}

export const ThemeContext = createContext({
    theme: 'light',
    updateTheme: () => { }

});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const updateTheme = (newTheme) => {

        setTheme(newTheme)    

        if (theme === themes.light) {
            setIsDark(false)
        } else {
            setIsDark(true)
        }
    }

    return (

        <ThemeContext.Provider value={{ theme, updateTheme, isDark }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
