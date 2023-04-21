import styled from "styled-components";
import Card from "./Card";

export default function CardList() {
  return (
    <Div>
      {[...Array(8).keys()].map((item, i) => (
        <Card key={i} />
      ))}
    </Div>
  );
}

const Div = styled.div`
  margin: 0 120px;
  margin-top: 110px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 67px;
  justify-content: center;
`;
