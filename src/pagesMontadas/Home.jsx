import styled from 'styled-components';
import { Pokedex } from '../cards/pokedex';
import { pegarDataParaRenderizar } from "../services/getData"
import React,{ useEffect, useState, useContext } from "react";
import { ThemeContext } from '../services/trocarTema';

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const itensPerPage = 25;

    const { theme } = useContext(ThemeContext)

    const pegandoData = async () => {

        try {

            const pegaFunction = await pegarDataParaRenderizar(itensPerPage, itensPerPage*page)
            const pegaFunctionResults = await pegaFunction.results;

            const pokemonsDatas = await pegaFunctionResults.map(async (urlpokemon) => {

                const urlDopokemon = await urlpokemon.url

                const fetchPokemon = await fetch(urlDopokemon)

                return await fetchPokemon.json()

            });

            setTotalPages(Math.ceil(pegaFunction.count / itensPerPage));

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
            <Pokedex pokemons={pokemons} page={page} setPage={setPage} totalPages={totalPages}/>
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