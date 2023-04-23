import styled from "styled-components";

export default function Cardlet({ pokemon }) {
  return (
    <Div>
      <div className="cover">
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      </div>

      <h3>{pokemon.name}</h3>
    </Div>
  );
}

const Div = styled.div`
  background: white;
  width: 220px;
  height: 169px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 0 7px;
  padding-top: 7px;
  position: relative;
  margin-top: 52px;
  margin-bottom: 14px;

  .cover {
    background-color: #f1f1f1;
    width: 100%;
    height: 113px;
    border-radius: 15px;
    position: relative;

    img {
      position: absolute;
      top: -55px;
      height: 137.62582397460938px;
      width: 137.92498779296875px;
      transform: translateX(-50%);
      left: 50%;
    }
  }

  h3 {
    font-family: var(--font-clash);
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin: 8px 0;
    text-transform: capitalize;
  }
`;
