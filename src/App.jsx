
import "./App.css";
import Banner from "./components/Banner";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <main className="h-screen w-full overflow-hidden ">
        <Navbar />
        <Banner />
       <BottomNav />
      </main>
    </>
  );
}

export default App;
