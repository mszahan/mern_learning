import {
  addNewPlayer,
  getPlayers,
  getPlayerWithId,
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);
  app.route("/player/:PlayerId").get(getPlayerWithId);
};

export default routes;
