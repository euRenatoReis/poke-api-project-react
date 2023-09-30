import React, { useContext, useState } from "react"

import { ThemeContext, themes } from "../services/trocarTema"
import styled from "styled-components"

export const BotaoCarregarMais = () => {

    const [limit, setlimite] = useState(20)

    const { theme } = useContext(ThemeContext)

    const morePokemon = () => {

        setlimite(limit)
    }

    return (

        <button theme={theme} onClick={() => morePokemon()} className="botao-carregar-mais">
            Carregar Mais
        </button>
    )
}


export const BotaoTema = () => {

    const { theme, updateTheme } = useContext(ThemeContext)

    return (

        <EstilizaBotaoTema className="botao-tema" onClick={() => updateTheme(theme === themes.light ? themes.dark : themes.light)} theme={theme}>
            tema
        </EstilizaBotaoTema>
    )
}


const EstilizaBotaoTema = styled.button`



    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};
    border: ${props => props.theme.primaria.borderPrimaria};
    border-radius: 40px


`