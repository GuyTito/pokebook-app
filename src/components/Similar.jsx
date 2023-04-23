import styled from "styled-components";
import Cardlet from "./Cardlet";
import { md, sm } from "../utils/devices";

export default function Similar({ similar }) {
  return (
    <Div>
      <h2>Similar</h2>

      <div className="content">
        {similar.map((pokemon) => (
          <Cardlet key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 12px;
    font-family: var(--font-clash);
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    box-shadow: 0px -28px 24px -24px rgba(0, 0, 0, 0.25);
    width: 100%;

    @media ${md} {
      width: 70%;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(
      90deg,
      #ffffff 0%,
      rgba(233, 233, 233, 0.479167) 52.08%,
      #ffffff 100%
    );
    width: 100%;
    flex-direction: column;
    align-items: center;

    @media ${sm} {
      width: 70%;
      flex-direction: row;
    }
  }
`;
