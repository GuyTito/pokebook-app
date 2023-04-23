import { useEffect } from "react";
import styled from "styled-components";

export default function Modal({ children, hideModal, position }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  function handleClick() {
    hideModal();
  }

  return (
    <Div onClick={handleClick} position={position}>
      {children}
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: ${(props) => `${props.position}`};
  background: rgba(39, 39, 39, 0.5);
  backdrop-filter: blur(5px);
`;
