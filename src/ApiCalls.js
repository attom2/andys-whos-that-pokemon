export const getAllPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const pokemon = await response.json()
  return pokemon.results;
}

export const getSinglePokemon = async (url) => {
  const response = await fetch(url)
  return await response.json()
}
