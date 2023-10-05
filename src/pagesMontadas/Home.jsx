import styled from 'styled-components';
import { Pokedex } from '../cards/pokedex';
import { pegarDataParaRenderizar } from "../services/getData"
import React,{ useEffect, useState, useContext } from "react";
import { ThemeContext } from '../services/trocarTema';

const Home = (props) => {

    const [pokemons, setPokemons] = useState([])
    const { limit, setLimit } = props

    const { theme } = useContext(ThemeContext)

    const pegandoData = async () => {

        try {

            const pegaFunction = await pegarDataParaRenderizar(limit)
            const pegaFunctionResults = await pegaFunction.results;

            const pokemonsDatas = await pegaFunctionResults.map(async (urlpokemon) => {

                const urlDopokemon = await urlpokemon.url

                const fetchPokemon = await fetch(urlDopokemon)

                return await fetchPokemon.json()

            });

            const resultados = await Promise.all(pokemonsDatas);

            setPokemons(resultados)

        } catch (error) {
            console.error('erro ao pesquisar nas urls pokemon', error)
        }
    }

    useEffect(() => {

       pegandoData()
       
    })

    return (
        <HomeEstilizada theme={theme}>
            <Pokedex pokemons={pokemons} limit={limit} setLimit={setLimit}/>
        </HomeEstilizada>

    )
}

const HomeEstilizada = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    background-color: ${props => props.theme.especificos.fundoPokedex};
`

export { Home }