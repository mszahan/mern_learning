import React from "react";
import "./App.css";
import PlayerForm from "./player/PlayerForm";
import PlayerList from "./player/PlayerList";
import PlayerDetail from "./player/PlayerDetail";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menu">Menu</div>

        <div className="player_list">
          <PlayerList />
        </div>
        <div className="player_detail">
          <PlayerDetail />
        </div>
        <div className="player_form">
          <PlayerForm />
        </div>
      </div>
    );
  }
}

export default App;
