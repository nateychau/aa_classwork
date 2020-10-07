
export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon)
}

export const selectAllItems = (state) => {
    return Object.values(state.entities.items)
}