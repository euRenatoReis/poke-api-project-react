

import React, { useContext } from 'react'
import { CardPokemonEstilizado, PicturePokemonEstilizado, BarraInferiorCard } from '../estilos/styled-components';
import { ThemeContext } from '../services/trocarTema.jsx';
import { Link } from 'react-router-dom';
/* import { createPage } from '../services/getData' */

const Card = (props) => {


    const { theme } = useContext(ThemeContext)

    const { pokemon } = props


    return (
        /*  <Link to="/poke-page" /* onClick={() => createPage(pokemon)}  > */
        <CardPokemonEstilizado className='card-pokemon' style={{ color: theme.color, backgroundColor: theme.background, border: theme.border }}>

            <PicturePokemonEstilizado>
                <source srcSet={pokemon.sprites.front_default}></source>
                <img src={pokemon.sprites.front_default} alt='foto do pokemon'></img>
            </PicturePokemonEstilizado>

            <BarraInferiorCard>
                <h3>
                    {pokemon.name}
                </h3>
            </BarraInferiorCard>

        </CardPokemonEstilizado>
        /*       </Link> */
    )
}

export default Card