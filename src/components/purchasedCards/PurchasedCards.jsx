import React from "react";

const PurchasedCards = ({player}) => {
    console.log(player)
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
      <button className="btn">X</button>
    </div>
  );
};

export default PurchasedCards;
