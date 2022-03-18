import { ICore, ReducerActionProps } from "../../shared/utilities/interfaces";
import { CORE_ACTIONS } from "./actions";

const initialState: ICore = {
  themeMode: true
};

const CoreReducer = (state: ICore = initialState, action: ReducerActionProps) => {
  switch (action.type) {
    case CORE_ACTIONS.TOGGLE_APP_THEME:
      return {
        themeMode: !state.themeMode
      };

    default: {
      return {
        ...state
      };
    }
  }
};

export default CoreReducer;
