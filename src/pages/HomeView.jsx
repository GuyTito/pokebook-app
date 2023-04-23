import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import { useSelector } from "react-redux";
import { getThemeColor } from "../store/themeSlice";
import { lg, md, sm, xl } from "../utils/devices";

export default function App() {
  const themeColor = useSelector(getThemeColor);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("listview");
  }

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

      <form onSubmit={handleSubmit} style={{ borderColor: `${themeColor}` }}>
        <input type="text" placeholder="Enter pokemon name" />
        {/* <button type="submit">
          <img src={SearchIcon} alt="search icon" />
        </button> */}
        <Link to="listview" style={{ backgroundColor: themeColor }}>
          <img src={SearchIcon} alt="search icon" />
        </Link>
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

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 60px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.08);
    margin-bottom: 16px;
    font-size: 16px;
    border-width: 5px;
    padding: 5px 10px;

    @media ${sm} {
      width: 400px;
    }

    @media ${md} {
      padding: 4px 8px;
      border-width: 5px;
    }

    @media ${xl} {
      padding: 8px 9px 8px 20px;
      font-size: 18px;
      width: 536px;
      border-width: 10px;
    }

    input {
      width: 100%;
      outline: none;
      color: var(--text-gray);
      background-color: transparent;
    }

    a {
      padding: 8px;
      color: white;
      border-radius: 50%;
      font-size: 20px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

      @media ${xl} {
        padding: 14px;
      }
    }
  }

  .link {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0d131a;

    @media ${xl} {
      padding: 18px;
    }
  }
`;
