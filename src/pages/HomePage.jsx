import { useState } from 'react';
import {Link} from 'react-router-dom';
import HeroSelect from "../components/HeroSelect";

export default function HomePage(){
    const [chosenHero, setChosenHero] = useState("Travis")
    const heroes = [
        {
            name: "Travis",
            class: "knight",
            baseHP: 10,
            ability:"For the Queen !",
            description: "Travis, the gallant knight, driven by a legacy of honor, defends his kingdom with unwavering courage and chivalry, forged through trials of valor from his youth.",
        },
        {
            name: "Rebecca",
            class: "sorceress",
            baseHP: 5,
        },
    ]
    return(
        <>
            <h1>Choose your hero</h1>
            {heroes.map(hero => <HeroSelect key={hero.name} hero={hero}/>)}
            <Link to={`/map/:${chosenHero}`}>START</Link>
        </>
    );
}