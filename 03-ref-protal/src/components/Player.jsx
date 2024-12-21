import { useState, useRef } from "react";

export default function Player() {
  const inputValue = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(inputValue.current.value);
    inputValue.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputValue} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
