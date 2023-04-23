import styled from "styled-components";
import BackIcon from "../assets/back_icon.svg";
import { useDispatch } from "react-redux";
import { hideDetailView } from "../store/modalSlice";
import { useEffect } from "react";
import getDominantColor from "../utils/getDominantColor";
import { useState } from "react";
import { lg, md, sm, xl } from "../utils/devices";

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
  width: 100%;
  height: 200px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;

  @media ${sm} {
    margin-bottom: 40px;
  }
  @media ${md} {
    margin-bottom: 55px;
  }
  @media ${xl} {
    margin-bottom: 78px;
    height: 350px;
  }

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
    padding: 10px;

    @media ${sm} {
      /* padding: px; */
    }
    @media ${xl} {
      padding: 16px;
    }
  }

  .sprite {
    object-fit: contain;
    position: absolute;
    bottom: -20%;
    transform: translateX(-50%);
    left: 50%;
    width: 200.7px;
    height: 140.4px;

    @media ${sm} {
      width: 250px;
      height: 190px;
    }
    @media ${xl} {
      width: 312px;
      height: 319px;
    }
  }
`;
