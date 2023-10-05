

const pegarDataParaRenderizar = async (limit) => {

    try {

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
        const dataAll = data.json()
        return dataAll

    } catch (error) {
        console.error('erro ao carregar data', error)
    }

}

const PesquisarPokemonESpecificado = async (pokemonName) => {

    try {

        const dataDOPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const pokemonDados = await dataDOPokemon.json()
        return pokemonDados
    } catch (error) {

        console.log('erro ao captar dados do pokemon na função', error)
    }

}



export { pegarDataParaRenderizar, PesquisarPokemonESpecificado }