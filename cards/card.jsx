

import React, { useContext, useState } from 'react'
import { CardPokemonEstilizado, PicturePokemonEstilizado, BarraInferiorCard } from '../estilos/styled-components';
import { ThemeContext } from '../services/trocarTema.jsx';
import { PesquisarPokemonESpecificado } from '../services/getData';
import { PokePage } from '../pagesMontadas/PokePage.jsx';

import { Link } from 'react-router-dom';

const Card = (props) => {

    const [resultsSearch, setResultsSearch] = useState([])
    const { theme } = useContext(ThemeContext)

    const { pokemon } = props


    const createPage = async (pokemon) => {

        try {

            let pokemonNome = pokemon.name;

            const Pesquisando = await PesquisarPokemonESpecificado(pokemonNome)

            console.log('resultado do pesquisando:', Pesquisando)

            const prometendoPesquisa = await Promise.all(Pesquisando)

            setResultsSearch(prometendoPesquisa)

            return (

                <PokePage resultsSearch={resultsSearch} />
            )


        } catch (error) {

            console.log('erro ao pesquisar sobre o pokemon', error)
        }

    }


    return (
        <Link to="/poke-page" onClick={() => createPage(pokemon)} >
            <CardPokemonEstilizado className='card-pokemon' style={{ color: theme.color, backgroundColor: theme.background, border: theme.border }}>

                <PicturePokemonEstilizado>
                    <source srcSet={pokemon.sprites.front_default}></source>
                    <img src={pokemon.sprites.front_default} alt='foto do pokemon'></img>
                </PicturePokemonEstilizado>

                <BarraInferiorCard>
                    <h3>
                        {pokemon.name}
                    </h3>
                </BarraInferiorCard>

            </CardPokemonEstilizado>
        </Link>
    )
}

export default Card