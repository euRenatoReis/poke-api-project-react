import { Pokedex } from '../cards/pokedex';
import { pegarDataParaRenderizar } from "../services/getData"
import { useEffect, useState } from "react";
import React from 'react'

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimite] = useState(20)

    const pegandoData = async () => {

        try {

            const pegaFunction = await pegarDataParaRenderizar(limit)
            const pegaFunctionResults = await pegaFunction.results;

            const pokemonsDatas = await pegaFunctionResults.map(async (urlpokemon) => {

                const urlDopoekemon = await urlpokemon.url

                const fetchPokemon = await fetch(urlDopoekemon)
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

        <Pokedex pokemons={pokemons} setLimite={setLimite} limit={limit} />
    )
}

export { Home }