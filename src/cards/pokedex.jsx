
import { BotaoCarregarMais } from "../botoes/botoes";
import { PokeDexEstilizada, ListaDaPokedexEstilizada } from "../estilos/GlobalStyles";
import Card from "./card"


export const Pokedex = (props) => {

    const { pokemons, setLimite, limit } = props;
    
    
    return (

        <section className="pokedex-main">
            <ul className="lista-pokedex">
                {pokemons.map((pokemon, index) => (

                    <li className="list-card-pokemon" pokemon={pokemon} key={index}></li>
                ))
                }
            </ul>

            <input className="mostrar-mais" setLimite={setLimite} limit={limit} type="button"/>
        </section>
    )
}
