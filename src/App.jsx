import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

// promise declare is remaining outer function therefor protect from fallback when player choose--

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);

  const [availableBalance, setAvailableBalance] = useState(6000000);

  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer=(p)=>{
    const filteredPlayer=purchasedPlayers.filter(fPlayer=>fPlayer.playerName!==p.playerName)
    console.log(filteredPlayer)
    setPurchasedPlayers(filteredPlayer)
    setAvailableBalance(availableBalance+p.price)
  }

  return (
    <>
      {/* navbar */}
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="flex justify-between mx-10 mt-5">
        <h2>{toggle===true?"Available Player": `Selected Players (${purchasedPlayers.length})`}</h2>
        <div className="flex gap-1">
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`btn ${toggle === true ? "bg-green-100" : ""}`}
          >
            Available
          </button>

          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`btn ${toggle === false ? "bg-green-100" : ""} `}
          >
            Selected ({purchasedPlayers.length}/6)
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className=" loading loading-spinner loading-lg"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <span className=" loading loading-spinner loading-lg"></span>
          }
        >
          <SelectedPlayers
            purchasedPlayers={purchasedPlayers}
            removePlayer={removePlayer}
            
          ></SelectedPlayers>
        </Suspense>
      )}

      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
