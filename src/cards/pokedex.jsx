
import styled from "styled-components";
import React, {useContext} from "react";
import { ThemeContext } from "../services/trocarTema";

export const Pokedex = (props) => {

    const { pokemons, setlimite, limit} = props;

    const { theme } = useContext(ThemeContext)

    return (

        <PokedexEstilizada theme={theme} className="pokedex-main">
            <ul className="lista-pokedex">

                {pokemons.map((pokemon, index) => (

                    <li className="list-card-pokemon" pokemon={pokemon} key={index}></li>
                ))
                }

            </ul>

            <input className="botao-carregar-mais" setlimite={setlimite} limit={limit} type="button" />
        </PokedexEstilizada>
    )
}

const PokedexEstilizada = styled.section`


    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #F46646;
    list-style: none;
    border-radius: 0px;



.lista-pokedex{

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    gap: 20px;
}

.list-card-pokemon{

width: 250px;
height: 300px;
display: flex;
flex - direction: column;
border - radius: 14px;
border: solid 2px ${props => props.theme.primario.borderPrimaria};
}

.botao-carregar-mais{
    width: 190px;
    height: 40px;
    border - radius: 20px;
    color: ${props => props.theme.primario.borderPrimaria};
    background - color: ${props => props.theme.secundario.backgroundSecundaria};
    border: solid 2px ${props => props.theme.primario.borderPrimaria};
}


`
