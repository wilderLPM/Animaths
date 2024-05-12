import { useContext, createContext, useState } from "react";

const HeroContext = createContext();

export function HeroProvider({ children }) {
  const [chosenHero, setChosenHero] = useState(null);
  const heroes = [
    {
      name: "Travis",
      class: "Knight",
      img: "/assets/images/cat.svg",
      baseHP: 10,
      attack: 3,
      ability: "For the Queen !",
      description:
        "Driven by a legacy of honor, Travis defends his kingdom with unwavering courage and chivalry, forged through trials of valor from his youth.",
    },
    {
      name: "Rebecca",
      class: "Sorceress",
      img: "/assets/images/lion.svg",
      baseHP: 5,
      attack: 4,
      ability: "Stand back !",
      description:
        "Orphan from a young age, Rebecca's talent was quickly recognised by her tutors who raised her to become the next High Priestess of Trelmor.",
    },
  ];
  return (
    <HeroContext.Provider value={{ heroes, chosenHero, setChosenHero }}>
      {children}
    </HeroContext.Provider>
  );
}

export const useHeroContext = () => useContext(HeroContext);
