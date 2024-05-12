import { useParams } from "react-router-dom";

export default function BlueCanyon() {
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
      hp: 1000,
      attack: 150,
    },
  ];
  return <></>;
}
