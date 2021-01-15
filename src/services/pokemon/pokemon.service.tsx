// Pokemon services

const baseUrl = "https://pokeapi.co/api/v2/";

export const fetchPokemonMocked = (): Promise<[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });
};

export const fetchPokemones = async () => {
  const res = await fetch(`${baseUrl}/pokemon`);
  const data = await res.json();

  return data.results;
};

export const fetchPokemon = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return data;
};
