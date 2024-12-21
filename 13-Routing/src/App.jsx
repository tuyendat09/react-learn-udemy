import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/root" element={<Home />}>
          <Route path=":id" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
