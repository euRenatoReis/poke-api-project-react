import logo from './logo.svg';
import './App.css';
import { Pokedex } from './cards/pokedex';
import { pegarDataParaRenderizar } from "../src/services/getData"
import { useEffect, useState } from "react";
import { BotaoTema } from './botoes/botoes';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [limit, setLimite] = useState(20)


  const pegandoData = async () => {

    try {

      const pegaFunction = await pegarDataParaRenderizar(limit)
      const pegaFunctionResults = await pegaFunction.results;

      const pokemonsDatas = pegaFunctionResults.map(async (urlpokemon) => {

        const urlDopoekemon = urlpokemon.url

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
    <div className="App">
      <header className="App-header">
        <BotaoTema />
      </header>
      <Pokedex pokemons={pokemons} setLimite={setLimite} limit={limit} />
    </div>
  );
}

export default App;
