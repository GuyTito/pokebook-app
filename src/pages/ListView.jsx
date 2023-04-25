import styled from "styled-components";
import Topbar from "../components/Topbar";
import CardList from "../components/CardList";
import DetailView from "../components/DetailView";
import PageSize from "../components/PageSize";
import Pagination from "../components/Pagination";
import { lg, md, sm, xl } from "../utils/devices";

export default function ListView() {
  return (
    <Div>
      <Topbar />

      <main>
        <CardList />

        <DetailView />

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
    margin: 0 20px;

    @media ${md} {
      margin: 0 80px;
    }

    @media ${xl} {
      margin: 0 120px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }
`;
