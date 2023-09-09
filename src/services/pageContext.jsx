/*
import { createContext, useState } from "react";
import { createPage } from "./getData";

const pegandoDataFunction = async (pokeDado, setPokedado) => {

    const results = await createPage(setPokedado, pokeDado)

    console.log('results é:',results)

     const telaDadosPoke = {

        pokeName: pokeDado.name,
        pokePicture: pokeDado.sprites.front_default,
        pokeType: pokeDado.types.map((tipo) => {

            return tipo.type.name
        }),
        pokeAbillity: pokeDado.abilities.forEach((ability) => {

            return ability.name
        }),
        pokeMoves: pokeDado.moves.forEach((movimento) => {

            return movimento.move.name
        }),

    } 

}


export const TelaPokeContext = createContext({});

export const TelaPokeProvider = async (props) => {

    const [pokeDado, setPokedado] = useState();

    await pegandoDataFunction(pokeDado, setPokedado)

    return (

        <TelaPokeContext.Provider value={{ pokeDado, setPokedado }}>
            {props.children}
        </TelaPokeContext.Provider>

    )

}

 export {telaDadosPoke} */