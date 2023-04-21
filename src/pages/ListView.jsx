import styled from "styled-components";
import Topbar from "../components/Topbar";
import Card from "../components/Card";

export default function ListView() {
  return (
    <Div>
      <Topbar />

      <div className="card-list">
        {[...Array(8).keys()].map((item, i) => (
          <Card key={i} />
        ))}
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 120px;
  .card-list {
    margin: 0 120px;
    margin-top: 110px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 67px;
    justify-content: center;
  }
`;
