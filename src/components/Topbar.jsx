import styled from "styled-components";
import GrSearchIcon from "../assets/gray_search_icon.svg";
import ThemeButton from "./ThemeButton";
import Brand from "./Brand";
import { lg, lsm, md, sm } from "../utils/devices";

export default function Topbar() {
  return (
    <Div>
      <Brand />

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
          <img src={GrSearchIcon} alt="search icon" />
        </label>
        <input type="text" name="search" placeholder="Search pokemon" />
      </form>

      <ThemeButton />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  position: relative;
  padding: 12px 15px;

  @media ${md} {
    padding-right: 52px;
  }

  form {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 440px;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-gray);
    padding: 10px;
    width: 50%;
    margin-left: 80px;

    @media ${sm} {
      width: 45%;
      font-size: 18px;
      margin-left: 0px;
    }
    @media ${lg} {
      width: 440px;
    }

    button {
      color: var(--text-gray);
    }

    input {
      width: 100%;
      outline: none;
      background-color: transparent;
      /* border: 1px solid green; */
    }
  }
`;
