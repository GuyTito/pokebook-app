import styled from "styled-components";
import EyeIcon from "../assets/eye_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { showDetailView } from "../store/modalSlice";
import { getThemeColor } from "../store/themeSlice";
import { useEffect } from "react";
import { useState } from "react";
import { replaceCurrentCreature } from "../store/pokemonSlice";
import { pokemonEmojiTypes } from "../utils/pokemonEmojiTypes";
import fetchData from "../utils/fetchData";

export default function Card({ pokemon }) {
  const themeColor = useSelector(getThemeColor);
  const dispatch = useDispatch();
  const [creature, setCreature] = useState({});

  function handleClick() {
    dispatch(replaceCurrentCreature(creature));
    dispatch(showDetailView());
  }

  useEffect(() => {
    async function fetchCreature() {
      const data = await fetchData(pokemon.url);
      setCreature(data);
    }

    fetchCreature();
  }, [pokemon]);

  return (
    <Div>
      <div className="card">
        <div className="sprite">
          <img
            src={creature.sprites?.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>

        <h2>{pokemon.name}</h2>

        <div className="types">
          {creature.types?.map((item, i) => (
            <div key={i}>
              {pokemonEmojiTypes[item?.type?.name]} &nbsp; {item?.type?.name}
            </div>
          ))}
        </div>

        <div className="btn-container">
          <button
            type="button"
            onClick={handleClick}
            style={{ backgroundColor: themeColor }}
          >
            <span>View Pokemon</span>
            <img src={EyeIcon} alt="eye icon" />
          </button>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .card {
    background: white;
    width: 288px;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 10px 10px;
    padding-bottom: 20px;
    max-height: 330px;
    position: relative;

    .sprite {
      background-color: #f1f1f1;
      width: 100%;
      height: 148px;
      border-radius: 15px;
      margin-bottom: 20px;
      position: relative;

      img {
        position: absolute;
        top: -55px;
        transform: translateX(-50%);
        left: 50%;
        width: 187.54px;
        height: 191px;
        object-fit: contain;
      }
    }

    h2 {
      font-family: var(--font-clash);
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      margin-bottom: 8px;
      text-transform: capitalize;
    }

    .types {
      display: flex;
      justify-content: center;
      gap: 10px;

      div {
        background: #eeeeee;
        border-radius: 40px;
        padding: 6px 12px;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
      }
    }

    .btn-container {
      background: white;
      width: 288px;
      position: absolute;
      z-index: 9;
      left: 0;
      padding: 0 10px;
      padding-bottom: 13px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      opacity: 0;
      bottom: 0;
      transition: all 0.3s ease;

      button {
        padding: 12px 20px;
        border-radius: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-size: 16px;
        line-height: 22px;
        width: 100%;
      }
    }
  }

  .card:hover .btn-container {
    transform: translateY(99%);
    opacity: 1;
  }

  .card:hover {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
