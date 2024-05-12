import { Link } from "react-router-dom";
import HeroSelect from "../components/HeroSelect";
import { useHeroContext } from "../contexts/HeroContext";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { heroes, chosenHero, setChosenHero } = useHeroContext();
  return (
    <>
      <h1>Choose your hero</h1>
      <div className={styles.heroes}>
        {heroes.map((hero) => (
          <HeroSelect
            key={hero.name}
            hero={hero}
            setChosenHero={setChosenHero}
          />
        ))}
      </div>
      <div className={styles.start}>
        {chosenHero ? (
          <Link to={`/map/:${chosenHero.name}`}>START</Link>
        ) : (
          <p>Select a hero to start</p>
        )}
      </div>
    </>
  );
}
