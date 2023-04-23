import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getCurrentPokemons } from "../store/pokemonSlice";
import { lg, md, sm, xl } from "../utils/devices";

export default function CardList() {
  const currentPokemons = useSelector(getCurrentPokemons);

  return (
    <Div>
      {currentPokemons &&
        currentPokemons.map((pokemon) => (
          <Card key={pokemon.url} pokemon={pokemon} />
        ))}
    </Div>
  );
}

const Div = styled.div`
  margin-top: 110px;
  display: grid;
  gap: 67px;
  justify-content: center;

  @media ${sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
