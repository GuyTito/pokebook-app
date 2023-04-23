import styled from "styled-components";
import { sm, xl } from "../utils/devices";

export default function Tabs({ swithContent, tabs }) {
  function handleClick(tab) {
    swithContent(tab);
  }
  return (
    <Div>
      <div>
        <button
          className={tabs.about ? "selected" : ""}
          onClick={() => handleClick("about")}
        >
          About
        </button>
        <button
          className={tabs.stats ? "selected" : ""}
          onClick={() => handleClick("stats")}
        >
          Stats
        </button>
        <button
          className={tabs.similar ? "selected" : ""}
          onClick={() => handleClick("similar")}
        >
          Similar
        </button>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0px 0px 94px rgba(0, 0, 0, 0.07);
  padding: 10px;
  position: sticky;
  bottom: 0;

  @media ${sm} {
    /* padding: 17px 0; */
  }
  @media ${xl} {
    padding: 17px 0;
  }

  div {
    background: #e9e9e9;
    box-shadow: inset 0px 3px 2px rgba(0, 0, 0, 0.06);
    border-radius: 60px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border-radius: 60px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      padding: 8px 20px;

      @media ${sm} {
        /* padding: 12px 40px; */
      }
      @media ${xl} {
        padding: 12px 40px;
        font-size: 18px;
      }
    }

    .selected {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      background: #ffffff;
    }
  }
`;
