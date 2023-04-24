import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { getThemeColor } from "../store/themeSlice";
import { md, sm, xl } from "../utils/devices";
import Searchbar from "../components/Searchbar";

export default function App() {
  const themeColor = useSelector(getThemeColor);

  return (
    <Div>
      <img src={Logo} className="logo" alt="Pokebook Logo" />

      <h1>
        Poké <span style={{ color: themeColor }}>book</span>
      </h1>

      <p>
        Largest Pokémon index with information about every Pokemon you can think
        of.
      </p>

      <Searchbar themeColor={themeColor} />

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
  margin: 0 20px;

  @media ${md} {
  }

  .logo {
    width: 200.7px;
    height: 140.4px;

    @media ${md} {
      width: 280.51px;
      height: 180.25px;
    }

    @media ${xl} {
      width: 382.51px;
      height: 248.25px;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 35px;
    line-height: 59px;
    font-family: var(--font-clash);
    margin-bottom: 8px;

    @media ${md} {
      font-size: 38px;
    }

    @media ${xl} {
      font-size: 48px;
    }
  }

  p {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    text-align: center;
    margin-bottom: 45px;

    @media ${sm} {
      width: 370px;
    }

    @media ${xl} {
      margin-bottom: 96px;
      font-size: 18px;
      width: 370px;
    }
  }

  .link {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0d131a;
    margin-top: 16px;

    @media ${xl} {
      padding: 18px;
    }
  }
`;
