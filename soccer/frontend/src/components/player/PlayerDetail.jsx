const PlayerDetail = ({ player }) => {
  return (
    <div>
      <h1>Player details</h1>
      <h4>
        {player.firstName} {player.lastName}
      </h4>
      <p>{player.phone}</p>
      <p>{player.email}</p>
      <p>{player.team}</p>
    </div>
  );
};

export default PlayerDetail;
