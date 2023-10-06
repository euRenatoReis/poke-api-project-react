
import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../services/trocarTema";
import Card from "./card";
import { BotaoPaginaProxima, BotaoPaginaAnterior } from "../botoes/botoes";

export const Pokedex = (props) => {

    const { pokemons, page, setPage, totalPages } = props;

    const { theme } = useContext(ThemeContext)

    return (

        <PokedexEstilizada theme={theme}>
            <ul className="lista-pokedex">
                {pokemons.map((pokemon, index) => (

                    <li className="list-card-pokemon" key={index}><Card pokemon={pokemon} /></li>
                ))
                }
            </ul>

            <footer>
                <BotaoPaginaAnterior setPage={setPage} page={page} />
                <div className="numero-paginacao">{page} de {totalPages}</div>
                <BotaoPaginaProxima setPage={setPage} page={page} totalPages={totalPages} />
            </footer>

        </PokedexEstilizada>
    )
}

const PokedexEstilizada = styled.section`


    width: 80%;
    height: 80%;
    display: flex; 
    padding-top: 20px;
    padding-left: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background-color: ${props => props.theme.especificos.fundoPokedex};
    list-style: none;
    border-radius: 0px;
    

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
background-color: ${props => props.theme.secundaria.backgroundSecundaria};

}

.botao-carregar-mais{
    width: 190px;
    height: 40px;
    border-radius: 20px;
    color: ${props => props.theme.primaria.borderPrimaria};
    background-color: ${props => props.theme.secundaria.backgroundSecundaria};
    border: ${props => props.theme.primaria.borderPrimaria};
}

footer{

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 20px;
    justify-self: center;
}

`
