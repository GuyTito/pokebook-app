import styled from "styled-components";
import DownIcon from "../assets/down_icon.svg";
import { changePageSize, getPageSize } from "../store/pageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PageSize() {
  const pageSize = useSelector(getPageSize);
  const dispatch = useDispatch();
  let sizes = [8, 12, 16, 24];

  function handleClick(size) {
    dispatch(changePageSize(size));
  }

  return (
    <Div onClick={() => setShowDropdown(!showDropdown)}>
      <div className="page-size">
        <div className="size">{pageSize}</div>
        <img src={DownIcon} alt="down icon" />

        <ul className="content">
          {sizes.map((size) => (
            <li
              onClick={() => handleClick(size)}
              style={size == pageSize ? { display: "none" } : {}}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .page-size {
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
      right: 0;
      bottom: 0;
      transform: translateY(99%);
      padding: 5px;
      margin-top: 2px;
      opacity: 0;
      transition: all 0.3s ease;

      li {
        padding: 5px 30px;
        border-radius: 6px;
        display: none;
      }

      li:hover {
        background-color: #f3f3f3;
      }
    }
  }

  .page-size:hover .content {
    opacity: 1;
  }

  .page-size:hover li {
    display: block;
  }
`;
