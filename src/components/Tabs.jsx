import styled from "styled-components";

export default function Tabs() {
  return (
    <Div>
      <div>
        <button className="selected">About</button>
        <button>Stats</button>
        <button>Similar</button>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 127px;
  box-shadow: 0px 0px 94px rgba(0, 0, 0, 0.07);
  padding: 17px 0;

  div {
    background: #e9e9e9;
    box-shadow: inset 0px 3px 2px rgba(0, 0, 0, 0.06);
    border-radius: 60px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: min-content;

    button {
      padding: 12px 40px;
      height: 48px;
      border-radius: 60px;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    }

    .selected {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      background: #ffffff;
    }
  }
`;
