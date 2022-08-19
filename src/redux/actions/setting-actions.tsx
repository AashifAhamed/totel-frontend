import {
  SET_INITIAL_PATH,
  SettingsActionTypes,
  TOGGLE_NAV_COLLAPSED,
} from "types/action-types/settings.types";

export const toggleNavCollapsed = () => ({ type: TOGGLE_NAV_COLLAPSED });

export const setInitialPath = (initialPath: string): SettingsActionTypes => ({
  type: SET_INITIAL_PATH,
  initialPath,
});