

import React from 'react'
import { CardPokemonEstilizado, PicturePokemonEstilizado, BarraInferiorCard } from '../estilos/styled-components'

const Card = (props) => {

    const { pokemon } = props

    return (

        <CardPokemonEstilizado className='card-pokemon'>
            <PicturePokemonEstilizado>
                <source srcSet={pokemon.sprites.front_default}></source>
                <img src={pokemon.sprites.front_default}></img>
            </PicturePokemonEstilizado>

            <BarraInferiorCard>
                <h3>
                    {pokemon.name}
                </h3>
            </BarraInferiorCard>
        </CardPokemonEstilizado>
    )
}

export default Card