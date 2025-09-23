import React, { use } from "react";
import PlayerCard from "../PlayerCards/PlayerCard";

const AvailablePlayers = ({ playerPromise , availableBalance, setAvailableBalance ,purchasedPlayers,setPurchasedPlayers}) => {
  const playerData = use(playerPromise);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10">
      {playerData.map((player) => (
        <PlayerCard 
        purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} 
        availableBalance={availableBalance} 
        setAvailableBalance={setAvailableBalance} 
        player={player}>
        </PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
