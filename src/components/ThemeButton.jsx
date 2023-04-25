import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { showThemeModal } from "../store/modalSlice";
import ThemeModal from "./ThemeModal";
import TButton from "./TButton";
import { getThemeColor } from "../store/themeSlice";

export default function ThemeButton() {
  const themeColor = useSelector(getThemeColor);
  const dispatch = useDispatch();

  return (
    <>
      <TButton
        handleFunction={() => dispatch(showThemeModal())}
        bgColor={themeColor}
      />

      <ThemeModal />
    </>
  );
}

const Div = styled.div``;
