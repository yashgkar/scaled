import { connectRouter } from "connected-react-router";
import { AnyAction, combineReducers } from "redux";
import IState from "../shared/utilities/interfaces";
import Core from "../core/store/reducer"
// HYGEN-IMPORT

const combinedReducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    core: Core
  });// HYGEN-ADD-REDUCER
  // please do not remove this and above comments;
  // they are used by hygen for template generation

const createRootReducer =
  (history: any) => (state: IState, action: AnyAction) => {
    // Reset session state once user logout
    // if (action.type === AUTH_ACTIONS.LOGOUT_REQUEST) {
    //   state = {} as IState;
    // }
    return combinedReducers(history)(state, action);
  };

export default createRootReducer;
