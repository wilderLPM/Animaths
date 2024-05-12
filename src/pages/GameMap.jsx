import { Link, useParams } from "react-router-dom";
import styles from "./GameMap.module.css";

export default function GameMap() {
  const { hero } = useParams("map");
  return (
    <div className={styles.gameZones}>
      <Link to={`/dark-forest/${hero}`}>The dark forest</Link>
      <Link to={`/blue-canyon/${hero}`}>The blue canyon</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
