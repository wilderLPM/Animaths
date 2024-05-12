import { useState } from "react";
import { useHeroContext } from "../contexts/HeroContext";
import Map from "../components/Map";
import Fight from "../components/Fight";

export default function DarkForest() {
  const { chosenHero } = useHeroContext();
  const [inFight, setInFight] = useState(false); // useContext ???
  let indexFight = 0;
  const [currentHP, setCurrentHP] = useState(chosenHero.baseHP);
  const enemies = [
    {
      name: "Goblin",
      svg: "/assets/images/enemies/goblin.png",
      hp: 80,
      attack: 20,
    },
    {
      name: "Giant Spider",
      svg: "/assets/images/enemies/spider.svg",
      hp: 200,
      attack: 50,
    },
    {
      name: "Phoenix",
      svg: "/assets/images/enemies/phoenix.svg",
      hp: 500,
      attack: 50,
    },
  ];

  return inFight === true ? (
    <Fight
      enemies={enemies}
      setInFight={setInFight}
      indexFight={indexFight}
      currentHP={currentHP}
    />
  ) : (
    <Map enemies={enemies} setInFight={setInFight} indexFight={indexFight} />
  );
}
