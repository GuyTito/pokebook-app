import styled from "styled-components";
import Modal from "./Modal";
import { hideThemeModal } from "../store/modalSlice";
import TButton from "./TButton";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getThemeColor } from "../store/themeSlice";

export default function ThemeModal() {
  const dispatch = useDispatch();
  const themeColor = useSelector(getThemeColor);

  const themes = ["#de527f", "#39BADF", "#E1A725"];

  function switchTheme(color) {
    dispatch(changeTheme(color));
  }

  return (
    <Modal hideModal={() => dispatch(hideThemeModal())} position="center">
      <Div onClick={(e) => e.stopPropagation()}>
        <div className="top">Choose Theme</div>

        <div className="bottom">
          <TButton
            handleFunction={() => switchTheme(themes[0])}
            bgColor={themes[0]}
            showBorder={themes[0] == themeColor}
          />
          <TButton
            handleFunction={() => switchTheme(themes[1])}
            bgColor={themes[1]}
            showBorder={themes[1] == themeColor}
          />
          <TButton
            handleFunction={() => switchTheme(themes[2])}
            bgColor={themes[2]}
            showBorder={themes[2] == themeColor}
          />
        </div>
      </Div>
    </Modal>
  );
}

const Div = styled.div`
  background: #ebebeb;
  border-radius: 32px;

  .top {
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
    border-radius: 32px 32px 0px 0px;
    font-family: var(--font-clash);
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    padding: 10px 0;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px;
  }
`;
