

import React, { useContext, useState } from 'react'
import { ThemeContext } from '../services/trocarTema.jsx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = (props) => {

    const { theme } = useContext(ThemeContext);
    const { pokemon } = props;
  
    const pokemonNome = pokemon.name

    return (
        <Link to={`/poke-page/${pokemonNome}`}>
            <CardEstilizado theme={theme} className='card-pokemon'>

                <PicturePokemon theme={theme}>
                    <source srcSet={pokemon.sprites.front_default}></source>
                    <img src={pokemon.sprites.front_default} alt='foto do pokemon'></img>
                </PicturePokemon>

                <ParteDeBaixo theme={theme} className='barra-inferior-card'>
                    <h3>
                        {pokemon.name}
                    </h3>
                    <div className='falsos-atributos'>
                        <div className='falso-atributo-1'></div>
                        <div className='falso-atributo-2'></div>
                        <div className='falso-atributo-3'></div>
                        <div className='falso-atributo-4'></div>
                    </div>
                </ParteDeBaixo>

            </CardEstilizado>
        </Link>
    )
}

const CardEstilizado = styled.div`

    width: 180px;
    height: 280px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 14px;
    padding: 10px;
    border: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};   
   
`

const PicturePokemon = styled.picture`

    display: flex;
    align-content: center;
    justify-content: center;
    background-color: ${props => props.theme.especificos.imagemPokemonBg};
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    width: 100%;
    height: 60%;

`

const ParteDeBaixo =  styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40%;
    border-top: ${props => props.theme.primaria.borderPrimaria};
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};

    .falsos-atributos{

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
        justify-content: center;
        align-items: center;
    }

    .falsos-atributos div{ border-radius: 5px;}

    .falsos-atributos div:nth-child(1){
        background-color: ${props => props.theme.secundaria.colorSecundaria};
        width: 60px;
        height: 20px;
    }
    .falsos-atributos div:nth-child(2){
        background-color: ${props => props.theme.secundaria.colorSecundaria};
        width: 60px;
        height: 20px;
    }
    .falsos-atributos div:nth-child(3){
        background-color: ${props => props.theme.secundaria.colorSecundaria};
        width: 60px;
        height: 20px;
    }
    .falsos-atributos div:nth-child(4){
        background-color: ${props => props.theme.secundaria.colorSecundaria};
        width: 60px;
        height: 20px;
    }

`




export default Card