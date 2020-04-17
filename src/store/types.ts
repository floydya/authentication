import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface IAPITokenResponse<T = string> {
  access: T;
  refresh: T;
}

export interface IState extends IAPITokenResponse<string | null> {
  user: any | null;
}

export enum ActionTypes {
  SET_TOKEN = "SET_TOKEN",
  UPDATE_TOKEN = "UPDATE_TOKEN",
  REMOVE_TOKEN = "REMOVE_TOKEN",
  SET_USER = "SET_USER",
  REMOVE_USER = "REMOVE_USER",
}

export interface ISetToken {
  type: typeof ActionTypes.SET_TOKEN;
  payload: IAPITokenResponse;
}
export interface IUpdateToken {
  type: typeof ActionTypes.UPDATE_TOKEN;
  payload: string;
}
export interface IRemoveToken {
  type: typeof ActionTypes.REMOVE_TOKEN;
  payload?: any;
}
export interface ISetUser {
  type: typeof ActionTypes.SET_USER;
  payload: any;
}
export interface IRemoveUser {
  type: typeof ActionTypes.REMOVE_USER;
  payload?: any;
}

export type ActionType =
  | ISetToken
  | IUpdateToken
  | IRemoveToken
  | ISetUser
  | IRemoveUser;

export interface ICreateActionsProps {
  create: string;
  refresh: string;
  verify: string;
  me: string;
}

export type Result<R> = ThunkAction<R, IState, undefined, ActionType>;

export type Dispatch = ThunkDispatch<IState, undefined, ActionType>;
