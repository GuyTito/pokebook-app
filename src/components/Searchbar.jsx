import styled from "styled-components";
import { lg, md, sm, xl } from "../utils/devices";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/search.svg";
import GrSearchIcon from "../assets/gray_search_icon.svg";

export default function Searchbar({ themeColor }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("listview");
  }

  return (
    <Div themeColor={themeColor}>
      <form onSubmit={handleSubmit} style={{ borderColor: themeColor }}>
        {!themeColor && (
          <img className="icon-left" src={GrSearchIcon} alt="search icon" />
        )}
        <input type="text" placeholder="Enter pokemon name" />

        {themeColor && (
          <button type="submit" style={{ backgroundColor: themeColor }}>
            <img src={SearchIcon} alt="search icon" />
          </button>
        )}
      </form>
    </Div>
  );
}

const Div = styled.div`
  margin-left: ${({ themeColor }) => `${themeColor ? "" : "80px"}`};
  width: ${({ themeColor }) => `${themeColor ? "100%" : "50%"}`};

  @media ${sm} {
    width: ${({ themeColor }) => `${themeColor ? "400px" : "45%"}`};
    margin-left: ${({ themeColor }) => `${themeColor ? "" : "0"}`};
  }

  @media ${lg} {
    width: ${({ themeColor }) => `${themeColor ? "" : "400px"}`};
  }

  @media ${xl} {
    width: 536px;
    width: ${({ themeColor }) => `${themeColor ? "536px" : ""}`};
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 60px;
    box-shadow: ${({ themeColor }) =>
      `${themeColor ? "inset 0px 4px 4px #00000014" : ""}`};
    margin-bottom: ${({ themeColor }) => `${themeColor ? "16px" : ""}`};
    font-size: 16px;
    border-width: ${({ themeColor }) => `${themeColor ? "5px" : "1px"}`};
    border-color: #e1e1e1;
    padding: 5px 10px;

    @media ${sm} {
      font-size: 18px;
    }

    @media ${md} {
      padding: 4px 8px;
    }

    @media ${xl} {
      padding: 8px 9px 8px 20px;
      font-size: 18px;
      border-width: ${({ themeColor }) => `${themeColor ? "10px" : "1px"}`};
    }

    .icon-left {
      margin-right: 5px;
    }

    input {
      width: 100%;
      outline: none;
      background-color: transparent;
    }

    button {
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
`;
