import { RouterState } from "connected-react-router";

export interface ICore {
  themeMode: boolean;
}

export default interface IState {
  core: ICore;
  router: RouterState;
}

export interface ReducerActionProps {
  type: string;
  payload?: any;
}