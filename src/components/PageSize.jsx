import styled from "styled-components";
import DownIcon from "../assets/down_icon.svg";
import { useState } from "react";

export default function PageSize() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Div onClick={() => setShowDropdown(!showDropdown)}>
      <div className="size">8</div>
      <img src={DownIcon} alt="down icon" />

      {showDropdown && (
        <ul className="content">
          <li style={{ background: "#F3F3F3" }}>12</li>
          <li>16</li>
          <li>24</li>
        </ul>
      )}
    </Div>
  );
}

const Div = styled.div`
  font-family: var(--font-clash);
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  padding: 6px 8px;
  align-items: center;
  background: #e1e1e1;
  border-radius: 8px;
  width: fit-content;
  gap: 10px;
  cursor: pointer;
  position: relative;

  .size {
    padding: 6px 8px;
    position: relative;
    background: #ffffff;
    border-radius: 4px;
  }

  .content {
    position: absolute;
    background: #ffffff;
    border-radius: 8px;
    top: 100%;
    right: 0;
    padding: 5px;
    margin-top: 2px;

    li {
      padding: 5px 30px;
      border-radius: 6px;
    }
  }
`;
