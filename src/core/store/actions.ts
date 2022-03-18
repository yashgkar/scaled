import { AppDispatch } from "../../store/store";

export enum CORE_ACTIONS {
  TOGGLE_APP_THEME = "TOGGLE_APP_THEME"
}

export function toggleAppTheme() {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: CORE_ACTIONS.TOGGLE_APP_THEME,
    });
  };
}