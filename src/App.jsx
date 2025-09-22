import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";


const fetchPlayers= async ()=>{
  const res=await fetch("/players.json")
  return res.json()
}

function App() {
  
  const playerPromise=fetchPlayers()
  return (
    <>
    {/* navbar */}
    <Navbar></Navbar>

    {/* Available Players */}
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
    </Suspense>


    {/* Selected Players */}
    {/* <SelectedPlayers></SelectedPlayers> */}

    </>
  );
}

export default App;
