import {Link, useParams} from 'react-router-dom';

export default function GameMap(){
    const {hero} = useParams("map")
    return(
        <>
            <Link to={`/dark-forest/:${hero}`}>The dark forest</Link>
            <Link to={`/blue-canyon/:${hero}`}>The blue canyon</Link>
            <Link to="/">Home</Link>
        </>
    );
}