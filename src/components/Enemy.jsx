import styles from "./Enemy.module.css";

export default function Enemy({ enemy }) {
  return (
    <div className={styles.enemyBanner}>
      <div className={styles.enemyInfo}>
        <h2>{enemy.name}</h2>
        {/* BARRE DE VIE */}
        <p>
          HP : {enemy.hp}/{enemy.hp}
        </p>
      </div>
      <img src={enemy.svg} alt={enemy.name} className={styles.enemyImg} />
    </div>
  );
}
