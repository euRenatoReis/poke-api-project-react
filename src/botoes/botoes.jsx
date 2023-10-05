import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext, themes } from "../services/trocarTema"
import styled from "styled-components"

export const BotaoCarregarMais = () => {

    const [limit, setLimit] = useState(30)

    const { theme } = useContext(ThemeContext)

    const morePokemon = () => {

       setLimit(limit + 30)
    }

    return (

        <EstilizaCarregarMais theme={theme} onClick={() => morePokemon()} className="botao-carregar-mais">
            Carregar Mais
        </EstilizaCarregarMais>
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

export const BotaoVoltar = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <EstilizaBotaoVoltar theme={theme}>
            <Link to={`/`}>
                Voltar
            </Link>
        </EstilizaBotaoVoltar>
    )
}

const EstilizaBotaoTema = styled.button`

    display: flex;
    width: 80px;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primaria.colorPrimaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};
    border: ${props => props.theme.primaria.borderPrimaria};
    border-radius: 40px

`

const EstilizaBotaoVoltar = styled.button`

    display: flex;
    width: 90px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    color: ${props => props.theme.primaria.colorPrimaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};
    border: ${props => props.theme.primaria.borderPrimaria};
`

const EstilizaCarregarMais = styled.button`

    display: flex;
    width: 90px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    color: ${props => props.theme.secundaria.colorSecundaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};
    border: ${props => props.theme.primaria.borderPrimaria};

`