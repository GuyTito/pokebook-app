import styled from "styled-components";
import BackIcon from "../assets/back_icon.svg";
import { useDispatch } from "react-redux";
import { hideDetailView } from "../store/modalSlice";
import { useEffect } from "react";
import getDominantColor from "../utils/getDominantColor";
import { useState } from "react";

export default function Cover({ sprite, name }) {
  const dispatch = useDispatch();
  const [rgb, setRgb] = useState([]);

  useEffect(() => {
    getDominantColor(sprite, setRgb);
  }, []);

  const topColor = `rgb(${rgb?.map((v) => v + 30)})`;
  const bottomColor = `rgb(${rgb?.map((v) => v - 30)})`;

  return (
    <Div
      style={{
        background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
      }}
    >
      <button onClick={() => dispatch(hideDetailView())}>
        <img src={BackIcon} alt="back icon" />
      </button>

      <img className="sprite" src={sprite} alt={name} />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 624px;
  height: 340px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 17px;
  margin-bottom: 78px;

  button {
    position: absolute;
    left: 12px;
    top: 12px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
  }

  .sprite {
    width: 312px;
    height: 319px;
    object-fit: contain;
    position: absolute;
    bottom: -20%;
    /* left: 50%; */
    transform: translateX(50%);
  }
`;
