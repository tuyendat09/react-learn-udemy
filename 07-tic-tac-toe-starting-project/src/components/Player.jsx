import { useState } from "react";

export default function Player({ name, symbol, currPlayer }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleOnchange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={currPlayer ? "active" : null}>
      <span className="player">
        {isEditing && (
          <input
            type="text"
            onChange={handleOnchange}
            value={playerName}
            required
          ></input>
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
