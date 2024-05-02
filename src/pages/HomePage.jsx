import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSelect from "../components/HeroSelect";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [chosenHero, setChosenHero] = useState(null);
  const heroes = [
    {
      name: "Travis",
      class: "Knight",
      baseHP: 10,
      attack: 3,
      ability: "For the Queen !",
      description:
        "Driven by a legacy of honor, Travis defends his kingdom with unwavering courage and chivalry, forged through trials of valor from his youth.",
    },
    {
      name: "Rebecca",
      class: "Sorceress",
      baseHP: 5,
      attack: 4,
      ability: "Stand back !",
      description:
        "Orphan from a young age, Rebecca's talent was quickly recognised by her tutors who raised her to become the next High Priestess of Trelmor.",
    },
  ];
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
          <Link to={`/map/:${chosenHero}`}>START</Link>
        ) : (
          <p>Select a hero</p>
        )}
      </div>
    </>
  );
}
