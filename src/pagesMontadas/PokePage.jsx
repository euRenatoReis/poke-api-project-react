
import React, { useEffect, useState, useContext } from 'react'
import { PesquisarPokemonESpecificado } from '../services/getData'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';
import { useParams } from 'react-router-dom';

const PokePage = () => {

    const [pokemonEscolhido, setPokemonEscolhido] = useState({});
    const [abilidades, setAbilidades] = useState([]);
    const { pokemonNome } = useParams();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const pegaDadosPesquisados = async () => {
            try {
                const pegaDado = await PesquisarPokemonESpecificado(pokemonNome);

                console.log('o pokemon é:', pegaDado);

                setPokemonEscolhido(pegaDado);

            } catch (error) {
                console.log(error);
            }
        };

        const pegaAbilidadesPesquisadas = async (pokemonEscolhido) => {
            try {
                const urlHabilidades = await pokemonEscolhido.abilities.map((abilidade) => {
                    const pesquisaPelaURl = fetch(abilidade.ability.url);
                    const pesquisaUrlJSon = pesquisaPelaURl.json();
                    return pesquisaUrlJSon
                })

                console.log(urlHabilidades)

                setAbilidades(urlHabilidades)

            } catch (error) {
                console.log('erro ao pesquisar abilidades', error)
            }
        }

        pegaDadosPesquisados();
        pegaAbilidadesPesquisadas(pokemonEscolhido);
    }, [pokemonNome]);

    return (
        <TelaPokemonEstilizada theme={theme}>
            {pokemonEscolhido && pokemonEscolhido.sprites ? (
                <div>
                    <PrimeiraLinhaPokePages theme={theme}>
                        <picture>
                            <source srcSet={pokemonEscolhido.sprites.front_default}></source>
                            <img src={pokemonEscolhido.sprites.front_default} alt='foto do pokemon'></img>
                        </picture>

                        <div className='identificacao'>
                            <div className='nome-tipos'>
                                <h1>{pokemonEscolhido.name}</h1>
                                <ul>{pokemonEscolhido.types.map((tipos, index) => (
                                    <li key={index}>{tipos.type.name}</li>
                                ))}</ul>
                            </div>
                            <div className='abilidades-div'>
                                <h3>Abilities</h3>
                                <ul className='abilidades'>
                                    {pokemonEscolhido.abilities.map((ability, index) => (
                                        <li key={index}>
                                            {ability.ability.name}
                                            {/* {abilidades[index].effect_entries[0].effect} */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </PrimeiraLinhaPokePages>
                    <SegundaLinhaPokePages theme={theme}>

                        <div className='lista-moves'>
                            <div className='moves-div'>
                                <h3>Movimentos</h3>
                                <ul>
                                    {
                                        pokemonEscolhido.moves.map((moves, index) => (
                                            <li key={index}>{moves.move.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    </SegundaLinhaPokePages>
                </div>
            ) : (
                <p>carregando...</p>
            )
            }
        </TelaPokemonEstilizada >

    );
}

const TelaPokemonEstilizada = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 80%;
    background-color: ${props => props.theme.especificos.fundoPokedex};
`

const PrimeiraLinhaPokePages = styled.div`

    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    height: 50%;
    background-color: ${props => props.theme.especificos.fundoPokedex};


    .identificacao{

        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;  
        
    }

    .identificacao ul li{
        display: flex;
        background-color:  ${props => props.theme.primaria.backgroundPrimaria};
        padding: 10px;
        border-radius: 20px;
    }

`
const SegundaLinhaPokePages = styled.div`
display: flex;
flex-direction: row;
list-style: none;
width: 100%;
height: 50%;
background-color: ${props => props.theme.especificos.fundoPokedex};

    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        padding: 10px;
        background-color:  ${props => props.theme.secundaria.backgroundSecundaria}; 
    }

    .lista-moves ul li{
        display: flex;
        background-color:  ${props => props.theme.primaria.backgroundPrimaria};
        padding: 10px;
        border-radius: 10px;
    }  
  
`

export { PokePage } 