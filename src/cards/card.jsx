

import React, { useContext } from 'react'
import { ThemeContext } from '../services/trocarTema.jsx';
import { Link } from 'react-router-dom';
import { PokePage } from '../pagesMontadas/PokePage.jsx';
import styled from 'styled-components';

const Card = (props) => {

    const { theme } = useContext(ThemeContext)
    const { pokemon } = props

    function passaNome() {

        return (
            < PokePage pokemonName={pokemon.name}/>
        )
    }


    return (
        <Link to={`/poke-page/${pokemon.name}`} onClick={async () => passaNome()}  >
            <CardEstilizado theme={theme} className='card-pokemon'>

                <picture className='picture-pokemon'>
                    <source srcSet={pokemon.sprites.front_default}></source>
                    <img src={pokemon.sprites.front_default} alt='foto do pokemon'></img>
                </picture>

                <div className='barra-inferior-card'>
                    <h3>
                        {pokemon.name}
                    </h3>
                </div>

            </CardEstilizado>
        </Link>
    )
}

const CardEstilizado = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex - direction: column;
    border - radius: 14px;
    border: solid 2px ${props => props.theme.primario.borderPrimaria};

    .picture-pokemon{

        display: flex;
        width: 100 %;
        height: 60 %;
        align - content: center;
        justify - content: center;
        background - color: ${props => props.theme.especificos.fundoPokedex};
        border - top - left - radius: 14px;
        border - top - right - radius: 14px;
        
        }
        
        .barra-inferior-card{
        width: 100 %;
        height: 40 %;
        background - color: black;
        border - top: solid 5px ${props => props.theme.primario.borderPrimaria};
        border - bottom - left - radius: 14px;
        border - bottom - right - radius: 14px;
        color: ${props => props.theme.primario.borderPrimaria};
        background - color: ${props => props.theme.secundario.backgroundSecundaria};
        }
`


export default Card