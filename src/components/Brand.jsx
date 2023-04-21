import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getThemeColor } from "../store/themeSlice";

export default function Brand() {
  const themeColor = useSelector(getThemeColor);

  return (
    <Div>
      <Link to="/">
        <img src={Logo} alt="pokebook logo" />
        <h1>
          Poké<span style={{ color: themeColor }}>book</span>
        </h1>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 129.43px;
    height: 84px;
    position: absolute;
    left: 38px;
    top: -12px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-left: 180px;
    font-family: var(--font-clash);
  }
`;
