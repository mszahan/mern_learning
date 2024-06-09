import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PlayerForm from "./player/PlayerForm";
import PlayerList from "./player/PlayerList";
import PlayerDetail from "./player/PlayerDetail";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    const url = "http://localhost:4000/players";

    axios
      .get(url)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateCurrentPlayer = (player) => {
    setCurrentPlayer(player);
  };

  const addNewPlayer = (player) => {
    setPlayers([...players, player]);
  };

  return (
    <div className="container">
      <div className="title">
        <h4> Soccer Players </h4>
      </div>
      <div className="player_list">
        <PlayerList
          players={players}
          updateCurrentPlayer={updateCurrentPlayer}
        />
      </div>
      <div className="player_detail">
        <PlayerDetail player={currentPlayer} />
      </div>
      <div className="player_form">
        <PlayerForm addNewPlayer={addNewPlayer} />
      </div>
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       players: [],
//       currentPlayer: {},
//     };
//     this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
//   }

//   componentDidMount() {
//     const url = "http://localhost:4000/players";

//     axios
//       .get(url)
//       .then((Response) => {
//         this.setState({
//           players: Response.data,
//         });
//       })
//       .catch((error) => console.log(error));
//   }

//   updateCurrentPlayer(player) {
//     this.setState({
//       currentPlayer: player,
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="menu">Menu</div>

//         <div className="player_list">
//           <PlayerList
//             players={this.state.players}
//             updateCurrentPlayer={this.updateCurrentPlayer}
//           />
//         </div>
//         <div className="player_detail">
//           <PlayerDetail player={this.state.currentPlayer} />
//         </div>
//         <div className="player_form">
//           <PlayerForm />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
