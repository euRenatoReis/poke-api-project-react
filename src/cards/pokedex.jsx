
import styled from "styled-components";
import React, {useContext} from "react";
import { ThemeContext } from "../services/trocarTema";
import Card from "./card";

export const Pokedex = (props) => {

    const { pokemons, setlimite, limit} = props;

    const { theme } = useContext(ThemeContext)

    return (

        <PokedexEstilizada theme={theme}>
            <ul className="lista-pokedex">
                {pokemons.map((pokemon, index) => (

                    <li className="list-card-pokemon" key={index}><Card pokemon={pokemon}/></li>
                ))
                }
            </ul>

            <input className="botao-carregar-mais" setlimite={setlimite} limit={limit} type="button" />
        </PokedexEstilizada>
    )
}

const PokedexEstilizada = styled.section`


    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${props => props.theme.especificos.fundoPokedex};
    list-style: none;
    border-radius: 0px;
    max-width: 100%;
    max-height: 100%;
    

.lista-pokedex{

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    max-height: 100%;
    align-self: center;
    justify-self: center;
    gap: 30px;
    align-items: center;
    
}

.list-card-pokemon{

width: 180px;
height: 280px;
display: flex;
flex-direction: column;
border-radius: 14px;
border: ${props => props.theme.primaria.borderPrimaria};

}

.botao-carregar-mais{
    width: 190px;
    height: 40px;
    border-radius: 20px;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};
    border: ${props => props.theme.primaria.borderPrimaria};
}


`
