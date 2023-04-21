import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";

export default function App() {
  return (
    <Div>
      <img src={Logo} alt="Pokebook Logo" />

      <h1>
        Poké <span>book</span>
      </h1>

      <p>
        Largest Pokémon index with information about every Pokemon you can think
        of.
      </p>

      <form>
        <input type="text" placeholder="Enter pokemon name" />
        <button type="submit">
          <img src={SearchIcon} alt="search icon" />
        </button>
      </form>

      <div className="link">
        <Link to="listview">View all</Link>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h1 {
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    font-family: var(--font-clash);
    margin-bottom: 8px;

    span {
      color: var(--theme-color);
    }
  }

  p {
    font-size: 18px;
    line-height: 24px;
    width: 370px;
    text-align: center;
    margin-bottom: 96px;
  }

  form {
    display: flex;
    justify-content: space-between;
    width: 536px;
    border: 10px solid var(--theme-color);
    padding: 8px 9px 8px 20px;
    border-radius: 60px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.08);
    margin-bottom: 16px;

    input {
      width: 100%;
      outline: none;
      font-size: 24px;
      color: var(--text-gray);
      background-color: transparent;
      /* border: 1px solid green; */
    }

    button {
      padding: 14px;
      background-color: var(--theme-color);
      color: white;
      border-radius: 50%;
      font-size: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
  }

  .link {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0d131a;
  }
`;
