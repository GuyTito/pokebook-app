import styled from "styled-components";
import { md, sm, xl } from "../utils/devices";

export default function Stats({ stats }) {
  return (
    <Div>
      <div className="line long"></div>
      <h2>Stats</h2>

      <div className="content">
        <div className="line long"></div>

        {stats &&
          stats.map((item, i) => (
            <>
              <div key={item.name} className="xtic">
                <div className="left">{item.stat.name}</div>
                <div className="right">
                  <div className="outer">
                    <div
                      className="inner"
                      style={{ width: item.base_stat }}
                    ></div>
                  </div>
                  <span>{item.base_stat}</span>
                </div>
              </div>

              <div className="line-wrapper">
                <div className="line short"></div>
              </div>
            </>
          ))}
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
    width: 100%;
    padding: 12px;
    font-family: var(--font-clash);
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    box-shadow: 0px -28px 24px -24px rgba(0, 0, 0, 0.25);

    @media ${md} {
      width: 70%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 9px;
    background: linear-gradient(
      90deg,
      #ffffff 0%,
      rgba(233, 233, 233, 0.479167) 52.08%,
      #ffffff 100%
    );

    width: 100%;
    padding: 0 10px;

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

      .left {
        text-align: right;
        width: 50%;
        font-family: var(--font-clash);
        text-transform: capitalize;
      }

      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        font-family: var(--font-clash);
        font-weight: 600;

        .outer {
          width: 70%;
          background-color: #cbcbcb;
          height: 8px;
          .inner {
            height: 100%;
            background-color: var(--theme-color);
          }
        }

        span {
        }
      }
    }
  }
`;
