
/* const createPage = async ( props) => {

    const {setPokeDado, pokeDado} = props

    try {

        let pokemonNome = await pokeDado.name;

        const Pesquisando = await PesquisarPokemonESpecificado(pokemonNome)

        console.log('resultado do pesquisando:', Pesquisando)

        const prometendoPesquisa = await Promise.all(Pesquisando)

        await setPokeDado(prometendoPesquisa)

    } catch (error) {

        console.log('erro ao pesquisar sobre o pokemon', error)
    }

} */

const pegarDataParaRenderizar = async (limit) => {

    try {

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
        const dataAll = data.json()
        return dataAll

    } catch (error) {
        console.error('erro ao carregar data', error)
    }

}

const PesquisarPokemonESpecificado = async (pokemonNome) => {

    try {

        const dataDOPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}`)
        const pokemonDados = await dataDOPokemon.json()

        return pokemonDados
    } catch (error) {

        console.log('erro ao captar dados do pokemon na função', error)
    }

}


export { pegarDataParaRenderizar, PesquisarPokemonESpecificado, /* createPage */ }