import styled from "styled-components";

export default function About() {
  return (
    <Div>
      <div className="line long"></div>
      <h2>About</h2>

      <div className="content">
        <div className="line long"></div>

        <div className="xtic">
          <div>Height</div>
          <div>1.0m</div>
        </div>

        <div className="line-wrapper">
          <div className="line short"></div>
        </div>

        <div className="xtic">
          <div>Weight</div>
          <div>13.7kg</div>
        </div>

        <div className="line-wrapper">
          <div className="line short"></div>
        </div>

        <div className="xtic">
          <div>Abilities</div>
          <ul>
            <li>&#x2022; overgrow</li>
            <li>&#x2022; chlorophyll</li>
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
    width: 510px;
  }

  .short {
    width: 240px;
  }

  .line-wrapper {
    display: flex;
    justify-content: center;
  }

  h2 {
    width: 510px;
    padding: 12px;
    font-family: var(--font-clash);
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    box-shadow: 0px -28px 24px -24px rgba(0, 0, 0, 0.25);
  }

  .content {
    /* border: 1px solid red; */
    width: 510px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(217, 217, 217, 0.06) 51.04%,
      #ffffff 100%
    );

    .xtic {
      display: flex;
      gap: 40px;
      /* border: 1px solid green; */

      div:nth-of-type(1) {
        text-align: right;
        /* border: 1px solid red; */
        width: 50%;
        font-family: var(--font-clash);
        font-size: 20px;
        line-height: 25px;
      }

      div:nth-of-type(2),
      ul {
        text-align: left;
        /* border: 1px solid blue; */
        width: 50%;
        font-family: var(--font-clash);
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
`;
