import styled from 'styled-components';
import { Pokedex } from '../cards/pokedex';
import { pegarDataParaRenderizar } from "../services/getData"
import React,{ useEffect, useState, useContext } from "react";
import { ThemeContext } from '../services/trocarTema';

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [limit, setlimite] = useState(20)

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
            <Pokedex pokemons={pokemons} setlimite={setlimite} limit={limit} />
        </HomeEstilizada>

    )
}

const HomeEstilizada = styled.section`

    display: flex;
    heigth: 100%;
    width: 100%; 
    background-color: blue;
`

export { Home }