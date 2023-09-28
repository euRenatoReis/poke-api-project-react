
import React, { useEffect, useState, useContext } from 'react'
import { PesquisarPokemonESpecificado } from '../services/getData'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';

const PokePage = async () => {

    const { pokemonName } = useParams();
    const [pokemonEscolhido, setPokemonEscolhido] = useState()

    const { theme } = useContext(ThemeContext)


    const pegaDadosPesquisados = async () => {

        try {

            const pegaDado = await PesquisarPokemonESpecificado(pokemonName)
            console.log('o pokemon é:', pegaDado)

            const resultados = await Promise.all(pegaDado)

            setPokemonEscolhido(resultados)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        pegaDadosPesquisados()
    })


    return (
        <TelaPokemonEstilizada theme={theme}>
            <PrimeiraLinhaPokePages className="linha-1">
                <picture>
                    <source srcSet={pokemonEscolhido}></source>
                    <img src={pokemonEscolhido} alt='foto do pokemon'></img>
                </picture>

                <div className='identificacao'>
                    <div className='nome-tipos'>
                        <h1>{pokemonEscolhido}</h1>
                        <p>{pokemonEscolhido}</p>
                    </div>
                    <div className='abilidades'>
                        {
                            pokemonEscolhido
                        }
                    </div>
                </div>
            </PrimeiraLinhaPokePages>
            <div className='linha-2'>

                <div className='lista-moves'>
                    {
                        pokemonEscolhido
                    }
                </div>

                <div className='sprites'>


                </div>
            </div>
        </TelaPokemonEstilizada>
    )
}

const TelaPokemonEstilizada = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 80%;

`

const PrimeiraLinhaPokePages = styled.div`

.PrimeiraLinhaPokepage {
    display: flex;
    flex - direction: row;
    background - color: ${props => props.theme.especificos.fundoPokedex};
 }

`


export { PokePage } 