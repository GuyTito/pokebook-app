import styled from "styled-components";
import GrSearchIcon from "../assets/gray_search_icon.svg";
import Logo from "../assets/logo.svg";

export default function Topbar() {
  return (
    <Div>
      <div className="brand">
        <img src={Logo} alt="pokebook logo" />
        <h1>
          Poké<span>book</span>
        </h1>
      </div>

      <form>
        <label htmlFor="search">
          <img src={GrSearchIcon} alt="search icon" />
        </label>
        <input type="text" name="search" placeholder="Enter name of pokemon" />
      </form>

      <div className="theme-button">
        <div></div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 52px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);

  .brand {
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 129.43px;
      height: 84px;
      position: absolute;
      left: 38px;
      top: -12px;
    }

    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      margin-left: 180px;
      font-family: "Clash Display", sans-serif;

      span {
        color: var(--theme-color);
      }
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 440px;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    font-size: 18px;
    line-height: 24px;
    color: var(--text-gray);
    padding: 10px;

    button {
      color: var(--text-gray);
    }

    input {
      width: 100%;
      outline: none;
      background-color: transparent;
      /* border: 1px solid green; */
    }
  }

  .theme-button {
    width: 45px;
    height: 45px;
    cursor: pointer;
    padding: 5px;
    border: 1px solid #868686;
    border-radius: 100%;

    div {
      background-color: var(--theme-color);
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
`;
