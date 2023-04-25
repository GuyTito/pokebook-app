import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

export default function Modal({ children, hideModal, position, show }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (show === false) document.body.style.overflowY = "scroll";

    return () => (document.body.style.overflow = "scroll");
  }, [show]);

  function handleClick() {
    hideModal();
  }

  return (
    <AnimatePresence>
      {show && (
        <Div
          onClick={handleClick}
          position={position}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key="modal"
        >
          {children}
        </Div>
      )}
    </AnimatePresence>
  );
}

const Div = styled(motion.div)`
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
