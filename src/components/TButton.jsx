import styled from "styled-components";

export default function TButton({ handleFunction, bgColor, showBorder }) {
  function handleClick() {
    handleFunction();
  }
  return (
    <Div onClick={handleClick} style={showBorder ? border : {}}>
      <div style={{ background: bgColor }}></div>
    </Div>
  );
}

const Div = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  padding: 5px;
  border-radius: 100%;

  div {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const border = {
  border: "1px solid black",
};
