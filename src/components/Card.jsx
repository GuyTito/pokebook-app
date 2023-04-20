import styled from "styled-components";
import Charizard from "../assets/charizard.svg";

export default function Card() {
  return (
    <Div>
      <div className="pic">
        <img src={Charizard} alt="" />
      </div>

      <h2>charizard</h2>

      <div className="xtics">
        <div>🔥 Fire</div>
        <div>🔥 Fire</div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background: white;
  width: 288px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 0 10px;
  padding-top: 10px;
  padding-bottom: 23px;

  .pic {
    background-color: #f1f1f1;
    width: 100%;
    height: 148px;
    border-radius: 15px;
    margin-bottom: 20px;
    position: relative;

    img {
      position: absolute;
      top: -55px;
      left: 30px;
    }
  }

  h2 {
    font-family: var(--heading);
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 8px;
  }

  .xtics {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    line-height: 22px;

    div {
      background: #eeeeee;
      border-radius: 40px;
      padding: 4px 12px;
    }
  }
`;
