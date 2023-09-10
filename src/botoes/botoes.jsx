import React, { useContext } from "react"

import { ThemeContext, themes } from "../services/trocarTema"

export const BotaoCarregarMais = (props) => {

    const { limit, setLimite } = props

    const { theme } = useContext(ThemeContext)

    const morePokemon = (limit) => {

         limit = limit + 20
         setLimite(limit)
    }

    return (

        <button onClick={() => morePokemon(limit)} className="botao-carregar-mais">
            Carregar Mais
        </button>
    )
}


export const BotaoTema = () => {

    const { theme, setTheme} = useContext(ThemeContext)

    return (

        <button className="botao-tema"  onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light )}>
        </button>
    )
}