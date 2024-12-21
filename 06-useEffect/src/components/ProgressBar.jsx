import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemaningTime] = useState(timer);
  useEffect(() => {
    const interVal = setInterval(() => {
      setRemaningTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interVal);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
