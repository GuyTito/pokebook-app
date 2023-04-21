import styled from "styled-components";
import Modal from "./Modal";
import { hideDetailView } from "../store/modalSlice";
import { useDispatch } from "react-redux";
import Cover from "./Cover";
import Tabs from "./Tabs";
import About from "./About";
import Stats from "./Stats";
import Similar from "./Similar";
import { useState } from "react";

export default function DetailView() {
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState({
    about: true,
    similar: false,
    stats: false,
  });

  const swithContent = (property) => {
    setTabs((prevTabs) => ({
      ...Object.fromEntries(
        Object.entries(prevTabs).map(([key, value]) => [key, false])
      ),
      [property]: true,
    }));
  };

  return (
    <Modal hideModal={() => dispatch(hideDetailView())} position="end">
      <Div>
        <div>
          <Cover />

          <h1>Charizard</h1>

          {tabs.about && <About />}
          {tabs.stats && <Stats />}
          {tabs.similar && <Similar />}
        </div>

        <Tabs swithContent={swithContent} tabs={tabs} />
      </Div>
    </Modal>
  );
}

const Div = styled.div`
  height: 100vh;
  background-color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: var(--font-clash);
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
