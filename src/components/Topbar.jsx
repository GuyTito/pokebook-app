import styled from "styled-components";
import GrSearchIcon from "../assets/gray_search_icon.svg";
import Theme from "./Theme";
import Brand from "./Brand";

export default function Topbar() {
  return (
    <Div>
      <Brand />

      <form>
        <label htmlFor="search">
          <img src={GrSearchIcon} alt="search icon" />
        </label>
        <input type="text" name="search" placeholder="Enter name of pokemon" />
      </form>

      <Theme />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 52px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);

  form {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 440px;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    font-size: 18px;
    line-height: 24px;
    color: var(--text-gray);
    padding: 10px;

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
