import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="my-8 flex h-screen gap-8">
      <Sidebar></Sidebar>
      <NewProject></NewProject>
      <div class="p-4 pt-2"></div>
    </main>
  );
}

export default App;
