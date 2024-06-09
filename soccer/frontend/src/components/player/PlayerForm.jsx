import { useState } from "react";
import axios from "axios";

const PlayerForm = ({ addNewPlayer }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    // isCoach: '',
    team: "",
    speed: "",
    strength: "",
    endurance: "",
    ability: "",
    techniques: "",
    tactical: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitPlayer = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/players", form)
      .then((response) => {
        addNewPlayer(response.data);
        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          // isCoach: '',
          team: "",
          speed: "",
          strength: "",
          endurance: "",
          ability: "",
          techniques: "",
          tactical: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form">
      <h1 className="form_title">Add new player</h1>
      <form onSubmit={submitPlayer}>
        <div className="name">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contacts">
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="stats">
          <div>
            <label htmlFor="team">team</label>
            <input
              type="text"
              id="team"
              name="team"
              value={form.team}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="strength">strength</label>
            <input
              type="text"
              id="strength"
              name="strength"
              value={form.strength}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="speed">speed</label>
            <input
              type="text"
              id="speed"
              name="speed"
              value={form.speed}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="ability">ability</label>
            <input
              type="text"
              id="ability"
              name="ability"
              value={form.ability}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="endurance">endurance</label>
            <input
              type="text"
              id="endurance"
              name="endurance"
              value={form.endurance}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="techniques">techniques</label>
            <input
              type="text"
              id="techniques"
              name="techniques"
              value={form.techniques}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="tactical">tactical</label>
            <input
              type="text"
              id="tactical"
              name="tactical"
              value={form.tactical}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Add Player
        </button>
      </form>
    </div>
  );
};

// class PlayerForm extends React.Component {
//   submitPlayer(event) {
//     event.preventDefault();
//     axios
//       .post("http://localhost:4000/players", {
//         firstName: this.refs.firstName.value,
//         lastName: this.refs.lastName.value,
//         phone: this.refs.phone.value,
//         email: this.refs.email.value,
//       })
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   }
//   render() {
//     return (
//       <div className="form">
//         <h1>Add new player</h1>
//         <form onSubmit={this.submitPlayer.bind(this)}>
//           <div className="name">
//             <div>
//               <label htmlFor="firstName">First Name</label>
//               <input type="text" id="firstName" ref="firstName" />
//             </div>
//             <div>
//               <label htmlFor="lastName">last Name</label>
//               <input type="text" id="lastName" ref="lastName" />
//             </div>
//           </div>
//           <div className="contacts">
//             <div>
//               <label htmlFor="phone">Phone</label>
//               <input type="text" id="phone" ref="phone" />
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input type="text" id="email" ref="email" />
//             </div>
//           </div>
//           <button type="submit">Add Player</button>
//         </form>
//       </div>
//     );
//   }
// }

export default PlayerForm;
