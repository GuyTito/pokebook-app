import styled from "styled-components";
import Modal from "./Modal";
import { hideDetailView } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Cover from "./Cover";
import Tabs from "./Tabs";
import About from "./About";
import Stats from "./Stats";
import Similar from "./Similar";
import { useState } from "react";
import { getCurrentCreature } from "../store/pokemonSlice";
import { lg, md, sm, xl } from "../utils/devices";

export default function DetailView() {
  const creature = useSelector(getCurrentCreature);
  const dispatch = useDispatch();
  const [similar, setSimilar] = useState([]);
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

  async function fetchCreature(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function findSimilar() {
    let types = creature.types?.map((item) => item?.type?.name);
    let typeObjects = await Promise.all(
      types.map((type) =>
        fetchCreature(`https://pokeapi.co/api/v2/type/${type}`)
      )
    );
    let pokemonsArr = typeObjects.map((type) => type.pokemon.slice(3, 5));
    let urls = pokemonsArr.flat().map((obj) => obj.pokemon.url);
    urls = urls.length > 2 ? urls.slice(0, 2) : urls;
    let pokemonObjects = await Promise.all(
      urls.map((url) => fetchCreature(url))
    );

    setSimilar(pokemonObjects);
  }

  findSimilar();

  return (
    <Modal hideModal={() => dispatch(hideDetailView())} position="end">
      <Div onClick={(e) => e.stopPropagation()}>
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

const Div = styled.div`
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
