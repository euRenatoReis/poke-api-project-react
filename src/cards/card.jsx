

import React, { useContext } from 'react'
import { ThemeContext } from '../services/trocarTema.jsx';
import { Link } from 'react-router-dom';
import { PokePage } from '../pagesMontadas/PokePage.jsx';
import styled from 'styled-components';

const Card = (props) => {

    const { theme } = useContext(ThemeContext)
    const { pokemon } = props

    function passaNome(pokemonNome) {

        return (
            < PokePage pokemonName={pokemonNome}/>
        )
    }

    const pokemonNome = pokemon.name

    return (
        <Link to={`/poke-page/${pokemon.name}`}  onClick={async () => passaNome(pokemonNome)}  >
            <CardEstilizado theme={theme} className='card-pokemon'>

                <PicturePokemon theme={theme}>
                    <source srcSet={pokemon.sprites.front_default}></source>
                    <img src={pokemon.sprites.front_default} alt='foto do pokemon'></img>
                </PicturePokemon>

                <ParteDeBaixo theme={theme} className='barra-inferior-card'>
                    <h3>
                        {pokemon.name}
                    </h3>
                </ParteDeBaixo>

            </CardEstilizado>
        </Link>
    )
}

const CardEstilizado = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 14px;
    padding: 10px;
    border: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.primaria.backgroundPrimaria};   
   
`

const PicturePokemon = styled.picture`


    display: flex;
    align-content: center;
    justify-content: center;
    background-color: ${props => props.theme.especificos.fundoPokedex};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    width: 100%;
    height: 60%;

`

const ParteDeBaixo =  styled.div`

    display: flex;
    width: 100%;
    height: 40%;
    border-top: ${props => props.theme.primaria.borderPrimaria};
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};


`




export default Card