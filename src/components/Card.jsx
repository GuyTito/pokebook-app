import styled from "styled-components";
import Charizard from "../assets/charizard.svg";
import EyeIcon from "../assets/eye_icon.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDetailView } from "../store/modalSlice";
import { getThemeColor } from "../store/themeSlice";

export default function Card() {
  const themeColor = useSelector(getThemeColor);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showDetailView());
  }

  return (
    <Div>
      <div className="card">
        <div className="pic">
          <img src={Charizard} alt="" />
        </div>

        <h2>charizard</h2>

        <div className="xtics">
          <div>🔥 Fire</div>
          <div>🔥 Fire</div>
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
      font-family: var(--font-clash);
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
