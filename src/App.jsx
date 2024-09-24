
import "./App.css";
import Banner from "./components/Banner";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <main className="h-screen w-full overflow-hidden ">
        <Navbar />
        <Home />
       <BottomNav />
      </main>
    </>
  );
}

export default App;
