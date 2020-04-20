import {
  IRemoveUser,
  ActionTypes,
  ISetUser,
  IRemoveToken,
  IUpdateToken,
  IAPITokenResponse,
  ISetToken,
} from "../types";

const basicActions = {
  setToken: (payload: IAPITokenResponse): ISetToken => ({
    type: ActionTypes.SET_TOKEN,
    payload,
  }),
  updateToken: (payload: string): IUpdateToken => ({
    type: ActionTypes.UPDATE_TOKEN,
    payload,
  }),
  removeToken: (): IRemoveToken => ({ type: ActionTypes.REMOVE_TOKEN }),
  setUser: (payload: any): ISetUser => ({
    type: ActionTypes.SET_USER,
    payload,
  }),
  removeUser: (): IRemoveUser => ({ type: ActionTypes.REMOVE_USER }),
};

export default basicActions;
