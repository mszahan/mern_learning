import {
  IoSpeedometerOutline,
  IoAccessibilityOutline,
  IoConstruct,
  IoCubeOutline,
} from "react-icons/io5";
import { GiMuscleUp } from "react-icons/gi";
import { MdOutlineHardware } from "react-icons/md";

const PlayerDetail = ({ player }) => {
  return (
    <>
      <div className="detail_container">
        <h4 className="name">
          {player.firstName} {player.lastName}
        </h4>
        <div className="contact">
          <p className="phone">Phone: {player.phone}</p>
          <p className="email">Email: {player.email}</p>
          <p className="team"> Team: {player.team}</p>
        </div>
        <div className="stats">
          <div className="stat_value">
            <IoSpeedometerOutline className="stat_icon" />
            <p>Speed - {player.speed}</p>
          </div>
          <div className="stat_value">
            <GiMuscleUp className="stat_icon" />
            <p>Strength - {player.strength}</p>
          </div>
          <div className="stat_value">
            <MdOutlineHardware className="stat_icon" />
            <p>Endurance - {player.endurance}</p>
          </div>
          <div className="stat_value">
            <IoAccessibilityOutline className="stat_icon" />
            <p>Ability - {player.ability}</p>
          </div>
          <div className="stat_value">
            <IoConstruct className="stat_icon" />
            <p>Techniques - {player.techniques}</p>
          </div>
          <div className="stat_value">
            <IoCubeOutline className="stat_icon" />
            <p>Tactical - {player.tactical}</p>
          </div>
        </div>
      </div>
      <div className="side_image"></div>
    </>
  );
};

export default PlayerDetail;
