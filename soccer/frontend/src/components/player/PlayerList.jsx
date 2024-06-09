const PlayerList = ({ players, updateCurrentPlayer }) => {
  return (
    <div className="list_container">
      <h1 className="list_title">Player List</h1>
      <div className="plyers_name">
        <ul className="list_list">
          {players.map((player) => (
            <li key={player._id} className="list_individual">
              <a
                onClick={() => updateCurrentPlayer(player)}
                className="list_link"
              >
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
