import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
  updatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
  app.route("/player/:PlayerId").get(getPlayerWithId).put(updatePlayer);
};

export default routes;
