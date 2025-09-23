import React, { use } from "react";

const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {playerData.map((player) => (
        <div className="card p-4 bg-base-100 w-96 shadow-sm">
          <figure>
            <img className=" max-h-[150px] object-cover" src={player.playerImg} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold">{player.playerName}</h2>
            <h5 className="text-base">Rating: {player.playerRating}</h5>
            <p className="text-base"></p>
            <p>{player.playerRole}</p>
            <p>price: {player.price}</p>
            <div className="card-actions justify-end">
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
