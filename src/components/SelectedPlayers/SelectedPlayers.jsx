import React from 'react';
import PurchasedCards from '../purchasedCards/PurchasedCards';

const SelectedPlayers = ({purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div>
            {
                purchasedPlayers.map(player=> <PurchasedCards player={player}></PurchasedCards>)
            }
        </div>
    );
};

export default SelectedPlayers;