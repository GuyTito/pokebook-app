import fetchData from "./fetchData";

export async function fetchSimilarPokemons(creatureTypes) {
  let types = creatureTypes?.map((item) => item?.type?.name);
  let typeObjects = await Promise.all(
    types?.map((type) => fetchData(`https://pokeapi.co/api/v2/type/${type}`))
  );
  let pokemonsArr = typeObjects.map((type) => type.pokemon.slice(3, 5));
  let urls = pokemonsArr.flat().map((obj) => obj.pokemon.url);
  urls = urls.length > 2 ? urls.slice(0, 2) : urls;
  let pokemonObjects = await Promise.all(urls.map((url) => fetchData(url)));

  return pokemonObjects;
}
