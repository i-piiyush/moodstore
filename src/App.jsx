
import "./App.css";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <main className="h-screen w-full overflow-hidden ">
        <Navbar />
       <BottomNav />
      </main>
    </>
  );
}

export default App;
