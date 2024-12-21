import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import ConfigCounter from "./components/Counter/ConfigCounter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
