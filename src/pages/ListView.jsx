import styled from "styled-components";
import Topbar from "../components/Topbar";
import CardList from "../components/CardList";
import DetailView from "../components/DetailView";
import { useSelector } from "react-redux";
import { isDetailView } from "../store/modalSlice";

export default function ListView() {
  const showDetailView = useSelector(isDetailView);
  return (
    <Div>
      <Topbar />

      <CardList />

      {showDetailView && <DetailView />}
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 120px;
`;
