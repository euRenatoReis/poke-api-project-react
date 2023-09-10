

import React, { useContext } from 'react'
import { ThemeContext } from '../services/trocarTema.jsx';
import { Link } from 'react-router-dom';
/* import { TelaPokeContext } from '../services/pageContext'; */

const Card = (props) => {


    const { theme } = useContext(ThemeContext)
    /* const { pokeDado, setPokedado } = useContext(TelaPokeContext) */
    const { pokemon } = props


    return (
        <Link to="/poke-page" /*onClick={async () => await setPokedado(pokeDado)}  */ >
            <div className='card-pokemon'>

                <picture className='picture-pokemon'>
                    <source srcSet={pokemon.sprites.front_default}></source>
                    <img src={pokemon.sprites.front_default} alt='foto do pokemon'></img>
                </picture>

                <div className='barra-inferior-card'>
                    <h3>
                        {pokemon.name}
                    </h3>
                </div>

            </div>
        </Link>
    )
}

export default Card