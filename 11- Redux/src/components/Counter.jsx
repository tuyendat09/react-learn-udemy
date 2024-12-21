import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.counter.counter);
  const disptach = useDispatch();

  const handleIncrement = () => {
    disptach(counterAction.increment());
  };

  const handleIncrease = () => {
    disptach(counterAction.increase(5));
  };

  const handleDecrement = () => {
    disptach(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increment 5</button>
        <button onClickCapture={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
