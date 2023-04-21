import styled from "styled-components";
import Modal from "./Modal";
import { hideDetailView } from "../store/modalSlice";
import { useDispatch } from "react-redux";
import Cover from "./Cover";
import Content from "./Content";
import Tabs from "./Tabs";

export default function DetailView() {
  const dispatch = useDispatch();

  return (
    <Modal hideModal={() => dispatch(hideDetailView())} position="end">
      <Div>
        <Cover />

        <h1>Charizard</h1>

        <Content />

        <Tabs />
      </Div>
    </Modal>
  );
}

const Div = styled.div`
  height: 100vh;
  background-color: white;
  /* padding: 17px; */
  overflow-y: scroll;

  h1 {
    font-family: var(--font-clash);
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
