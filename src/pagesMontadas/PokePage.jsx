
import React, { useEffect, useState, useContext } from 'react'
import { PesquisarPokemonESpecificado } from '../services/getData'
import styled from 'styled-components';
import { ThemeContext } from '../services/trocarTema';
import { useParams } from 'react-router-dom';

const PokePage = () => {

    const [pokemonEscolhido, setPokemonEscolhido] = useState({});
    const [abilidades, setAbilidades] = useState([]);
    const [isHovered, setHovered] = useState(false)
    const { pokemonNome } = useParams();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const pegaDadosPesquisados = async () => {
            try {
                const pegaDado = await PesquisarPokemonESpecificado(pokemonNome);

                setPokemonEscolhido(pegaDado);

            } catch (error) {
                console.log(error);
            }
        };

        const pegaAbilidadesPesquisadas = async () => {
            try {

                const urlHabilidades = await Promise.all(pokemonEscolhido.abilities.map(async (abilidade) => {
                    const pesquisaPelaURl = await fetch(abilidade.ability.url);
                    const pesquisaUrlJSon = await pesquisaPelaURl.json();
                    return pesquisaUrlJSon;
                }))

                setAbilidades(urlHabilidades)

            } catch (error) {
                console.log('erro ao pesquisar abilidades', error)
            }
        }

        pegaDadosPesquisados();
        pegaAbilidadesPesquisadas(pokemonEscolhido);

    }, [pokemonNome]);

    function mostrarDetalhesHover(){
        setHovered(true);
    }
    function esconderDetalhesHover(){
        setHovered(false)
    }

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
                                        <li className='detalhes' key={index} onMouseOver={mostrarDetalhesHover} onMouseOut={esconderDetalhesHover}>
                                            {ability.ability.name}
                                            {isHovered && abilidades[index] && abilidades[index].effect_entries && (
                                                <ul className='habilidades-infos'>
                                                    {abilidades[index].effect_entries.map((effectsdetails, innerIndex) => (
                                                        <li key={innerIndex}>{effectsdetails.effect}</li>
                                                    ))}
                                                </ul>
                                            )}
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
    border-radius: 20px;
    
`

const PrimeiraLinhaPokePages = styled.div`

    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    height: 50%;
    background-image: url(${props => props.theme.especificos.fundoImagem});
    background-size: cover;
    border: solid 15px purple;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    picture{
        display: flex;
        padding: 20px;
        width: 200px;
        height: 200px;
    }

    .identificacao{

        display: flex;
        flex-direction: row;
        gap: 30px;
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

    .abilidades{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    
    .abilidades .detalhes{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .abilidades-div{
        padding: 20px;
    }

    .habilidades-infos{
        top: 185px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color:  ${props => props.theme.secundaria.backgroundSecundaria};
        gap: 10px;
        border-radius: 10px;
    }

`
const SegundaLinhaPokePages = styled.div`
display: flex;
flex-direction: row;
list-style: none;
width: 100%;
height: 50%;
background-color: ${props => props.theme.especificos.fundoPokedex};
border: solid 15px purple;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

    .lista-moves{
       display: flex;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        padding: 10px;
        background-color: ${props => props.theme.especificos.fundoPokedex};
    }

    .lista-moves ul li{
        display: flex;
        background-color:  ${props => props.theme.primaria.backgroundPrimaria};
        padding: 10px;
        border-radius: 10px;
    }  

    .moves-div{
        padding: 20px;
    }
  
`

export { PokePage } 