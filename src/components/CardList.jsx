import styled from "styled-components";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getCurrentPokemons } from "../store/pokemonSlice";

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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 67px;
  justify-content: center;
`;
