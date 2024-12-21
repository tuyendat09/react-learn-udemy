import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [isExpired, setIsExpired] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const modal = useRef();
  let timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerStart(false);
      setIsExpired(true);
      modal.current.open();
    }, targetTime * 1000);
    setTimerStart(true);
  }

  return (
    <>
      <ResultModal ref={modal} targetTime={targetTime} result={"You Lost"} />
      <section className="challenge">
        <h2>{title}</h2>
        {isExpired && <p>Ga</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={handleStart}>
            {timerStart ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStart ? "active" : undefined}>
          {timerStart ? "Time is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
}
