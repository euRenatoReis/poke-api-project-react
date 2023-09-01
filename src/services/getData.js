


const pegarDataParaRenderizar = async (limit) => {

    try {

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
        const dataAll = data.json()
        return dataAll

    } catch (error) {
        console.error('erro ao carregar data', error)
    }

}


export { pegarDataParaRenderizar }