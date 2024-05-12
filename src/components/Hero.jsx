import { useHeroContext } from "../contexts/HeroContext";
export default function Hero({ currentHP }) {
  const { chosenHero } = useHeroContext();
  return (
    <>
      <img src={chosenHero.img} alt={chosenHero.name} />
      <h2>{chosenHero.name}</h2>
      <p>
        HP : {currentHP}/{chosenHero.baseHP}
      </p>
    </>
  );
}
