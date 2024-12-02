// src/PlayersList.js

import Player from './Player';
import players from './players';

// PlayerList component renders a list of Player components
function PlayersList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
