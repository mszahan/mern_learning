import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  submitPlayer(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/players", {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="form">
        <h1>Add new player</h1>
        <form onSubmit={this.submitPlayer.bind(this)}>
          <div className="name">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" ref="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">last Name</label>
              <input type="text" id="lastName" ref="lastName" />
            </div>
          </div>
          <div className="contacts">
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" ref="phone" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" ref="email" />
            </div>
          </div>
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
