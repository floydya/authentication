import axios from "axios";
import {
  ActionTypes,
  ISetToken,
  IAPITokenResponse,
  IRemoveToken,
  ISetUser,
  IRemoveUser,
  ICreateActionsProps,
  IUpdateToken,
  Result,
  ActionType,
} from "./types";
import { Dispatch } from "react";

type TokenType = string | null | undefined;

export const reduxActions = {
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

const actions = {
  login: (
    createURL: string,
    loginData: any
  ): Result<Promise<{ error?: any }>> => async (dispatch) => {
    return await axios.post(createURL, loginData).then(
      ({ data }) => {
        dispatch(reduxActions.setToken(data));
      },
      (error) => error
    );
  },
  refresh: (
    refreshURL: string,
    refreshToken: TokenType = undefined
  ): Result<void> => async (dispatch, getState) => {
    if (refreshToken === undefined)
      refreshToken = getState().authentication.refresh;
    await axios.post(refreshURL, { refresh: refreshToken }).then(
      ({ data: { access } }) => dispatch(reduxActions.updateToken(access)),
      () => {
        dispatch(reduxActions.removeUser());
        dispatch(reduxActions.removeToken());
      }
    );
  },
  verify: (
    verifyURL: string,
    refreshURL: string,
    accessToken: TokenType = undefined,
    refreshToken: TokenType = undefined
  ): Result<void> => async (dispatch, getState) => {
    if (accessToken === undefined)
      accessToken = getState().authentication.access;
    return await axios.post(verifyURL, { token: accessToken }).then(
      () => null,
      () => {
        if (refreshToken === undefined)
          refreshToken = getState().authentication.refresh;
        actions
          .refresh(refreshURL, refreshToken)
          .bind(
            null,
            dispatch,
            getState
          )(undefined);
      }
    );
  },
  fetchUser: (
    fetchUserURL: string,
    accessToken: TokenType = undefined
  ): Result<void> => async (dispatch, getState) => {
    if (accessToken === undefined)
      accessToken = getState().authentication.access;
    return await axios
      .get(fetchUserURL, { headers: { Authorization: `JWT ${accessToken}` } })
      .then(
        ({ data }) => dispatch(reduxActions.setUser(data)),
        (error) => error
      );
  },
  logout: () => (dispatch: Dispatch<ActionType>) => {
    dispatch(reduxActions.removeUser());
    dispatch(reduxActions.removeToken());
  },
};

export const createActions = ({
  create,
  refresh,
  verify,
  me,
}: ICreateActionsProps) => ({
  login: (loginData: any) => actions.login(create, loginData),
  refresh: (refreshToken: TokenType = undefined) =>
    actions.refresh(refresh, refreshToken),
  verify: (accessToken: TokenType = undefined) =>
    actions.verify(verify, refresh, accessToken),
  fetchUser: (accessToken: TokenType = undefined) =>
    actions.fetchUser(me, accessToken),
  logout: () => actions.logout(),
});

export default createActions;
