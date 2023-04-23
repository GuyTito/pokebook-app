import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getThemeColor } from "../store/themeSlice";
import { lsm, md, sm } from "../utils/devices";

export default function Brand() {
  const themeColor = useSelector(getThemeColor);

  return (
    <StyledLink to="/">
      <div className="img-container">
        <img src={Logo} alt="pokebook logo" />
      </div>

      <div className="name">
        Poké<span style={{ color: themeColor }}>book</span>
      </div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  .img-container {
    @media ${sm} {
      width: 45px;
      height: 45px;
    }

    img {
      width: 74.5px;
      height: 54px;
      position: absolute;
      bottom: -5px;

      @media ${sm} {
        width: 129.43px;
        height: 84px;
        bottom: -15px;
      }
    }
  }

  .name {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    font-family: var(--font-clash);
    display: none;

    @media ${md} {
      margin-left: 100px;
      display: block;
    }
  }
`;
