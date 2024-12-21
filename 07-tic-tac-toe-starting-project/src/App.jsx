import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);
  let winner = null;

  function handleSwitchUser(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      console.log(updatedTurns);
      return updatedTurns;
    });
  }

  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    // console.table([firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol]);

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Dat" symbol="X" currPlayer={activePlayer === "X"} />
          <Player name="Teo" symbol="O" currPlayer={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRestart} />
        )}
        <Gameboard switchUser={handleSwitchUser} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
