import styles from "./HeroSelect.module.css";

export default function HeroSelect({ hero, setChosenHero }) {
  function handleClick() {
    setChosenHero(hero);
  }
  return (
    <div
      className={styles.heroCard}
      style={{
        border: hero.name === "Rebecca" ? "solid blue" : "solid violet",
      }}
    >
      <h2>{hero.name}</h2>
      <em>{hero.class}</em>
      <ul>
        <li>HP: {hero.baseHP}</li>
        <li>Attack: {hero.attack}</li>
        <li>Ability: {hero.ability}</li>
      </ul>
      <hr />
      <blockquote>{hero.description}</blockquote>
      <button onClick={handleClick}>Choose {hero.name}</button>
    </div>
  );
}
