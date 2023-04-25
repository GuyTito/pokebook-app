import styled from "styled-components";
import { lg, md, sm, xl } from "../utils/devices";
import { search } from "../utils/search";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/search.svg";
import GrSearchIcon from "../assets/gray_search_icon.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, replaceCurrentCreature } from "../store/pokemonSlice";
import { useEffect } from "react";
import fetchData from "../utils/fetchData";
import { showDetailView } from "../store/modalSlice";
import { useRef } from "react";
import useOnClickOutside from "../utils/useOnClickOutside";

const TIMER = 1000;

export default function Searchbar({ themeColor }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const pokemons = useSelector(getPokemons);
  const dispatch = useDispatch();
  const autoCompleteRef = useRef(null);
  useOnClickOutside(autoCompleteRef, () => setShowResults(false));

  // debounce search with setTimeout to run once every second after a keystroke
  // this is to prevent search per stroke
  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    let results;
    timeout = setTimeout(() => {
      results = search(searchTerm, pokemons);
      setSearchResults(results);
      setShowResults(searchTerm && results?.length > 0);
    }, TIMER);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  async function handleClick(url) {
    const pokemon = await fetchData(url);
    dispatch(replaceCurrentCreature(pokemon));
    dispatch(showDetailView());
    setSearchTerm("");

    navigate("/listview");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchResults?.length > 0) {
      handleClick(searchResults[0]?.url);
    } else navigate("/listview");
  }

  return (
    <Div themeColor={themeColor}>
      <form onSubmit={handleSubmit} style={{ borderColor: themeColor }}>
        {!themeColor && (
          <img className="left-icon" src={GrSearchIcon} alt="search icon" />
        )}

        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Enter pokemon name"
          onFocus={() =>
            setShowResults(searchResults?.length > 0 && searchTerm)
          }
        />

        {themeColor && (
          <button type="submit" style={{ backgroundColor: themeColor }}>
            <img src={SearchIcon} alt="search icon" />
          </button>
        )}

        {showResults && (
          <ul ref={autoCompleteRef} className="auto-complete">
            {searchResults?.length > 0 &&
              searchResults.map((obj) => (
                <li
                  onClick={(e) => {
                    handleClick(obj.url);
                  }}
                  key={obj.url}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        )}
      </form>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
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

    .left-icon {
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

  .auto-complete {
    position: absolute;
    /* transform: translateX(0); */
    transform: translateY(100%);
    bottom: 0;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 5px;
    margin-left: -10px;
    z-index: 9;
    max-height: 200px;
    overflow-y: scroll;
    border: 1px solid #00000014;

    li {
      padding: 5px 10px;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: #f3f3f3;
      }
    }
  }
`;
