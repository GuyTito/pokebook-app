import styled from "styled-components";
import Topbar from "../components/Topbar";
import CardList from "../components/CardList";
import DetailView from "../components/DetailView";
import { useSelector } from "react-redux";
import { getDetailView } from "../store/modalSlice";
import PageSize from "../components/PageSize";
import Pagination from "../components/Pagination";

export default function ListView() {
  const showDetailView = useSelector(getDetailView);

  return (
    <Div>
      <Topbar />

      <main>
        <CardList />

        {showDetailView && <DetailView />}

        <div className="footer">
          <Pagination />
          <PageSize />
        </div>
      </main>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 120px;

  main {
    margin: 0 120px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }
`;
