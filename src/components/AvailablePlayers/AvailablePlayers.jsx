import React, { use } from 'react';

const AvailablePlayers = ({playerPromise}) => {

    const playerData=use(playerPromise)
    console.log(playerData)
    return (
        <div>
            <h2>available</h2>
        </div>
    );
};

export default AvailablePlayers;