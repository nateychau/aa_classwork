export const fetchAllPokemon = () => {
    return $.ajax({
        url: `/api/pokemon`,
        method: `GET`
    })
}

export const fetchPokemonDetail = (id) => {
    return $.ajax({
        url: `/api/pokemon/${id}`,
        method: `GET`
    })  
}