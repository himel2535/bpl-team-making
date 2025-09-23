import React, { useState } from 'react';

const PlayerCard = ({player,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers}) => {

    const handleSelected=(playerData)=>{
        const playerPrice=playerData.price;
        if(availableBalance<playerPrice){
            alert("insufficient balance")
            return;
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance-playerPrice);

        setPurchasedPlayers([...purchasedPlayers,playerData])

    }

    const [isSelected,setIsSelected]=useState(false)

    return (
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
              <button onClick={()=>{
                handleSelected(player)
                }} 
                disabled={isSelected} className="btn">{isSelected?"Selected":"Choose Player"}</button>
            </div>
          </div>
        </div>
    );
};

export default PlayerCard;