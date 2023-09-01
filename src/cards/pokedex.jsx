
import { BotaoCarregarMais } from "../botoes/botoes";
import { PokeDexEstilizada, ListaDaPokedexEstilizada } from "../estilos/styled-components";
import Card from "./card"


export const Pokedex = (props) => {

    const { pokemons, setLimite, limit } = props

    return (

        <PokeDexEstilizada className="pokedex-main">
            <ListaDaPokedexEstilizada className="lista-pokedex">
                {pokemons.map((pokemon, index) => (

                    <Card pokemon={pokemon} key={index}></Card>
                ))
                }
            </ListaDaPokedexEstilizada>

            <BotaoCarregarMais setLimite={setLimite} limit={limit} />
        </PokeDexEstilizada>
    )
}
