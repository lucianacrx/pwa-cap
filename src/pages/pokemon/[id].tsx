import PokemonContainer from "containers/pokemon/PokemonContainer/PokemonContainer";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchPokemon, fetchPokemones } from "services/pokemon/pokemon.service";
import { PokemonItem } from "types/pokemon.types";

export default PokemonContainer;

const getCompletePokemon = async (id: string) => {
  const data = await fetchPokemon(id);
  const pokemon = {
    ...data,
    imageUrl: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  };
  return pokemon;
};

export const getStaticPaths: GetStaticPaths = async context => {
  const pokemones = await fetchPokemones();
  const paths = pokemones.map((pokemon: PokemonItem) => {
    const urlSplited = pokemon.url.split("/");
    const id = urlSplited[urlSplited.length - 2];
    return {
      params: {
        id
      }
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const pokemon = await getCompletePokemon(params?.id as string);

  return { props: { pokemon } };
};
