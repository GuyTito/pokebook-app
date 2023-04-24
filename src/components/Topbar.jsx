import styled from "styled-components";
import ThemeButton from "./ThemeButton";
import Brand from "./Brand";
import { md } from "../utils/devices";
import Searchbar from "./Searchbar";

export default function Topbar() {
  return (
    <Div>
      <Brand />

      <Searchbar />

      <ThemeButton />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  position: relative;

  @media ${md} {
    padding-right: 52px;
    padding: 12px 15px;
  }
`;
