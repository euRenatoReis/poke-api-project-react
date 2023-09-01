import React, { useContext } from "react"
import { BotaoCarregarMaisEstilizado, BotaoTemaEstilizado } from "../estilos/styled-components"
import { ThemeContext, themes } from "../services/trocarTema"

export const BotaoCarregarMais = (props) => {

    const { limit, setLimite } = props

    const morePokemon = (limit) => {

         limit = limit + 20
         setLimite(limit)
    }


    return (

        <BotaoCarregarMaisEstilizado onClick={() => morePokemon(limit)} className="botao-carregar-mais">
            Carregar Mais
        </BotaoCarregarMaisEstilizado>
    )
}


export const BotaoTema = () => {

    const { theme, setTheme} = useContext(ThemeContext)

    return (

        <BotaoTemaEstilizado  onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light )}>
        </BotaoTemaEstilizado>
    )
}