import React from 'react';
import PurchasedCards from '../purchasedCards/PurchasedCards';

const SelectedPlayers = ({purchasedPlayers,removePlayer}) => {
    
    return (
        <div>
            {
                purchasedPlayers.map(player=> <PurchasedCards removePlayer={removePlayer} player={player}></PurchasedCards>)
            }
        </div>
    );
};

export default SelectedPlayers;