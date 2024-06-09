const PlayerList = (props) => {
  return (
    <div>
      <h1>Player List</h1>
      <div className="plyers_name">
        <ul>
          {props.players.map((player) => (
            <li key={player._id}>
              <a
                href="#!"
                onClick={props.updateCurrentPlayer.bind(this, player)}
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
