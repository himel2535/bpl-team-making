import React from "react";

const PurchasedCards = ({player,removePlayer}) => {

    const handleRemove=()=>{
        removePlayer(player)
    }

  return (
    <div className="flex justify-between items-center mx-10 my-5">
      <div>
        <img
          className="w-[50px] h-[50px]"
          src={player.playerImg}
          alt=""
        />
        <h5>{player.playerName}</h5>
      </div>
      <button onClick={handleRemove} className="btn">X</button>
    </div>
  );
};

export default PurchasedCards;
