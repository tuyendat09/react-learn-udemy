import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  function handleClick() {
    dispatch(uiAction.toggle());
  }

  return (
    <button onClick={handleClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
