export default function Map({ enemies, setInFight, indexFight }) {
  function handleClick() {
    // enabled only if className is nextFight
    setInFight(true);
  }
  return (
    <>
      {enemies.map((enemy, index) => (
        <button
          className={
            index === indexFight
              ? "nextFight"
              : index > indexFight
                ? "laterFight"
                : "previousFight"
          }
          id={`btn${index}`}
          key={enemy.name}
          onClick={handleClick}
        >
          {enemy.name}
        </button>
      ))}
    </>
  );
}
