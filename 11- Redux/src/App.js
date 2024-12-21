import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth.jsx";
import UserProfile from "./components/UserProfile.jsx";

import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenicated);

  return (
    <>
      <Header />
      {!isAuth && <Auth></Auth>}
      {isAuth && <UserProfile></UserProfile>}
      <Counter />
    </>
  );
}

export default App;
