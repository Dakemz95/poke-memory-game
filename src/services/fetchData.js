const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const POKEMON_COUNT = 151

const fetcher = async (id) => {
  let response = await fetch(API_URL + id);
  return await response.json()
}

export const fetchData = async (size) => {
  let urls = []

  for (let i = 0; i < size;) {
    let n = Math.ceil(Math.random() * POKEMON_COUNT)
    if (!urls.includes(n)) {
      urls.push(n)
      i++
    }
  }
  
  let data = await Promise.all(urls.map(url => fetcher(url)))
  return data.map( poke => ({
    id: poke.id,
    name: poke.name,
    img: poke.sprites.other['official-artwork'].front_default,
    type1: poke.types[0].type.name,
    type2: poke.types[1] ? poke.types[1].type.name : undefined,
    matched: false
  }))
}