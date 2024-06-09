const PlayerDetail = (props) => {
  return (
    <div>
      <h1>Player details</h1>
      <h4>
        {props.player.firstName} {props.player.lastName}
      </h4>
      <p>{props.player.phone}</p>
      <p>{props.player.email}</p>
      <p>{props.player.team}</p>
    </div>
  );
};

export default PlayerDetail;
