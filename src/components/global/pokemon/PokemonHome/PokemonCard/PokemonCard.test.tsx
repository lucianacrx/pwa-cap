import React from "react";
import { render } from "@testing-library/react";

import PokemonCard from "./PokemonCard";

describe("PokemonCard", () => {
  it("renders with default props", () => {
    render(
      <PokemonCard
        pokemon={{
          name: "raticate",
          url: "https://pokeapi.co/api/v2/pokemon/20/",
          imageUrl: "https://pokeres.bastionbot.org/images/pokemon/20",
          id: 20
        }}
      />
    );
  });
});
