import PokemonHomeContainer from "containers/pokemon/PokemonHomeContainer/PokemonHomeContainer";
import { GetStaticProps } from "next";
import { fetchPokemones } from "services/pokemon/pokemon.service";
import { PokemonItem } from "types/pokemon.types";
import { PokemonItemComplete } from "types/pokemon.types";

export default PokemonHomeContainer;

const getCompletePokemons = async (): Promise<PokemonItemComplete> => {
  const pokemones = await fetchPokemones();
  const pokemonesComplete = pokemones.map((pokemon: PokemonItem) => {
    const urlSplited = pokemon.url.split("/");
    const id = urlSplited[urlSplited.length - 2];
    return {
      ...pokemon,
      imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      id: +id
    };
  });
  return pokemonesComplete;
};

export const getStaticProps: GetStaticProps = async context => {
  const pokemones = await getCompletePokemons();
  return {
    props: {
      pokemones
    }
  };
};
