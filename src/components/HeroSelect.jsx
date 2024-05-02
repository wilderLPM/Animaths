export default function HeroSelect({hero}){
    return(
        <div>
            <h2>{hero.name}, <em>{hero.class}</em></h2>
            <ul>
                <li>{hero.baseHP}</li>
                <li>{hero.ability}</li>
            </ul>
            <hr/>
            <blockquote>{hero.description}</blockquote>
        </div>
    );
}