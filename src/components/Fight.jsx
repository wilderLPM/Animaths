import Enemy from "./Enemy";
import Hero from "./Hero";

export default function Fight({ indexFight, currentHP, enemies, setInFight }) {
  return (
    <>
      <Enemy enemy={enemies[indexFight]} />
      <Hero currentHP={currentHP} />
    </>
  );
}

//prop-types
