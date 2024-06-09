const PlayerList = ({ players, updateCurrentPlayer }) => {
  return (
    <div>
      <h1>Player List</h1>
      <div className="plyers_name">
        <ul>
          {players.map((player) => (
            <li key={player._id}>
              <a onClick={() => updateCurrentPlayer(player)}>
                {player.firstName} {player.lastName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerList;
