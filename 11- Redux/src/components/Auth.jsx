import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authAction } from "../store/auth";

const Auth = () => {
  const disptach = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    disptach(authAction.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
