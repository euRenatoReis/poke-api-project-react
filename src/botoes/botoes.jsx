import React, { useContext } from "react"

import { ThemeContext, themes } from "../services/trocarTema"
import styled from "styled-components"

export const BotaoCarregarMais = (props) => {

    const { limit, setlimite } = props

    const { theme } = useContext(ThemeContext)

    const morePokemon = () => {

        limit = limit + 20
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

.botao-tema{

    width: 80px;
    height: 80px;
    color: ${ props => props.theme.primario.borderPrimaria };
    background - color: ${ props => props.theme.secundario.backgroundSecundaria };
    border: solid 2px ${ props => props.theme.primario.borderPrimaria };
    border - radius: 40px
}

`