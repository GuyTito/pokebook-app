import styled from "styled-components";
import Modal from "./Modal";
import { getDetailView, hideDetailView } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Cover from "./Cover";
import Tabs from "./Tabs";
import About from "./About";
import Stats from "./Stats";
import Similar from "./Similar";
import { useState } from "react";
import { getCurrentCreature } from "../store/pokemonSlice";
import { lg, md, sm, xl } from "../utils/devices";
import fetchData from "../utils/fetchData";
import { fetchSimilarPokemons } from "../utils/fetchSimilarPokemons";
import { motion } from "framer-motion";

export default function DetailView() {
  const creature = useSelector(getCurrentCreature);
  const dispatch = useDispatch();
  const [similar, setSimilar] = useState([]);
  const showDetailView = useSelector(getDetailView);

  const [tabs, setTabs] = useState({
    about: true,
    similar: false,
    stats: false,
  });

  function swithContent(property) {
    setTabs((prevTabs) => ({
      ...Object.fromEntries(
        Object.entries(prevTabs).map(([key, value]) => [key, false])
      ),
      [property]: true,
    }));
  }

  fetchSimilarPokemons(creature?.types)
    .then((data) => setSimilar(data))
    .catch((error) => console.error(error));

  return (
    <Modal
      hideModal={() => dispatch(hideDetailView())}
      position="end"
      show={showDetailView}
    >
      <Div
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="cover-wrapper">
          <Cover
            sprite={creature.sprites?.other.dream_world.front_default}
            name={creature.name}
          />
        </div>

        <h1>{creature.name}</h1>

        {tabs.about && (
          <About
            height={creature.height}
            weight={creature.weight}
            abilities={creature.abilities}
          />
        )}
        {tabs.stats && <Stats stats={creature.stats} />}
        {tabs.similar && <Similar similar={similar} />}

        <Tabs swithContent={swithContent} tabs={tabs} />
      </Div>
    </Modal>
  );
}

const Div = styled(motion.div)`
  height: 100%;
  background-color: white;
  overflow-y: scroll;
  width: 100%;

  @media ${sm} {
    width: 70%;
    /* padding: 17px; */
  }
  @media ${lg} {
    width: 40%;
    /* padding: 17px; */
  }

  .cover-wrapper {
    padding: 10px;
  }

  h1 {
    font-family: var(--font-clash);
    font-size: 38px;
    font-weight: 600;
    line-height: 59px;
    text-align: center;
    margin-bottom: 15px;
    text-transform: capitalize;

    @media ${sm} {
      margin-bottom: 40px;
    }
    @media ${md} {
      margin-bottom: 40px;
    }
    @media ${xl} {
      font-size: 48px;
    }
  }
`;
