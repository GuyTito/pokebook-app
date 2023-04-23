import styled from "styled-components";
import { md, sm, xl } from "../utils/devices";

export default function About({ height, weight, abilities }) {
  return (
    <Div>
      <div className="line long"></div>
      <h2>About</h2>

      <div className="content">
        <div className="line long"></div>

        <div className="xtic">
          <div>Height</div>
          <div>{height} dm</div>
        </div>

        <div className="line-wrapper">
          <div className="line short"></div>
        </div>

        <div className="xtic">
          <div>Weight</div>
          <div>{weight} hg</div>
        </div>

        <div className="line-wrapper">
          <div className="line short"></div>
        </div>

        <div className="xtic">
          <div>Abilities</div>
          <ul>
            {abilities &&
              abilities.map((item, i) => (
                <li key={i}>&#x2022; &nbsp; {item.ability.name}</li>
              ))}
          </ul>
        </div>

        <div className="line long"></div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    height: 2px;
    background: linear-gradient(
      270deg,
      #ffffff -20%,
      rgba(217, 217, 217, 0.27) 45.3%,
      #ffffff 102.92%
    );
  }

  .long {
    width: 100%;

    @media ${sm} {
      width: 70%;
    }
  }

  .short {
    width: 240px;

    @media ${sm} {
      width: 240px;
    }
  }

  .line-wrapper {
    display: flex;
    justify-content: center;
  }

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
    flex-direction: column;
    gap: 9px;
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(217, 217, 217, 0.06) 51.04%,
      #ffffff 100%
    );

    width: 100%;

    @media ${sm} {
      width: 70%;
    }

    .xtic {
      display: flex;
      gap: 40px;
      font-size: 16px;
      line-height: 25px;

      @media ${xl} {
        font-size: 20px;
      }

      div:nth-of-type(1) {
        text-align: right;
        width: 50%;
        font-family: var(--font-clash);
      }

      div:nth-of-type(2),
      ul {
        text-align: left;
        width: 50%;
        font-family: var(--font-clash);
        font-weight: 600;
      }
    }
  }
`;
