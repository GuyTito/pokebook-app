import styled from "styled-components";
import BackIcon from "../assets/back_icon.svg";
import Charizard from "../assets/charizard.svg";
import { useDispatch } from "react-redux";
import { hideDetailView } from "../store/modalSlice";

export default function Cover() {
  const dispatch = useDispatch();

  return (
    <Div>
      <button onClick={() => dispatch(hideDetailView())}>
        <img src={BackIcon} alt="back icon" />
      </button>

      <img className="sprite" src={Charizard} alt="" />
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 624px;
  height: 340px;
  background: linear-gradient(180deg, #7fcad1 0%, #3da0a9 100%);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

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
    position: absolute;
    bottom: -20%;
    /* left: 50%; */
    transform: translateX(50%);
  }
`;
