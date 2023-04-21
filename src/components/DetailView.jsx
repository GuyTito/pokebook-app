import styled from "styled-components";
import Modal from "./Modal";
import { hideDetailView } from "../store/modalSlice";
import { useDispatch } from "react-redux";

export default function DetailView() {
  const dispatch = useDispatch();

  return (
    <Modal hideModal={() => dispatch(hideDetailView())}>
      <Div>detalil view</Div>
    </Modal>
  );
}

const Div = styled.div``;
