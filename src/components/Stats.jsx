import styled from "styled-components";

export default function Stats() {
  return (
    <Div>
      <div className="line long"></div>
      <h2>Stats</h2>

      <div className="content">
        <div className="line long"></div>

        <div className="xtic">
          <div className="left">HP</div>
          <div className="right">
            <div className="outer">
              <div className="inner"></div>
            </div>
            <span>60</span>
          </div>
        </div>

        <div className="line-wrapper">
          <div className="line short"></div>
        </div>

        <div className="xtic">
          <div className="left">Attack</div>
          <div className="right">
            <div className="outer">
              <div className="inner"></div>
            </div>
            <span>60</span>
          </div>
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
      90deg,
      #ffffff 0%,
      rgba(233, 233, 233, 0.479167) 52.08%,
      #ffffff 100%
    );

    .xtic {
      display: flex;
      gap: 40px;
      /* border: 1px solid green; */

      .left {
        text-align: right;
        /* border: 1px solid red; */
        width: 50%;
        font-family: var(--font-clash);
        font-size: 20px;
        line-height: 25px;
      }

      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid blue; */
        width: 50%;
        font-family: var(--font-clash);
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;

        .outer {
          width: 190px;
          background-color: #cbcbcb;
          height: 8px;
          .inner {
            height: 100%;
            width: 60%;
            background-color: var(--theme-color);
          }
        }

        span {
        }
      }
    }
  }
`;
