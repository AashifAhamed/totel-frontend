import Common from "./common.reducer";
import Dashboard from "./dashboard.reducer";
import Settings from "./setting.reducer";

const reducers = {
	dashboard: Dashboard,
  settings: Settings,
  common: Common
};

export default reducers;
