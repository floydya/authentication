export { default as basicActions } from "./basic";
export { default as thunkActions } from "./thunk";

import { ICreateActionsProps, Token, Dispatch } from "../types";
import { default as basicActions } from "./basic";
import { default as thunkActions } from "./thunk";

const createActions = ({
  loginURL,
  verifyURL,
  refreshURL,
  fetchUserURL,
}: ICreateActionsProps) => ({
  login: (loginData: any) => thunkActions.login(loginURL, loginData),
  verify: (accessToken: Token = undefined) =>
    thunkActions.verify(verifyURL, accessToken),
  refresh: (refreshToken: Token = undefined) =>
    thunkActions.refresh(refreshURL, refreshToken),
  fetchUser: (accessToken: Token = undefined) =>
    thunkActions.fetchUser(fetchUserURL, accessToken),
  initializeStore: async (accessToken: string, refreshToken: string) => (
    dispatch: Dispatch
  ) => {
    dispatch(
      basicActions.setToken({ access: accessToken, refresh: refreshToken })
    );
    try {
      dispatch(thunkActions.verify(verifyURL, accessToken)).then(() => {
        dispatch(thunkActions.fetchUser(fetchUserURL, accessToken));
      });
    } catch (error) {
      try {
        dispatch(thunkActions.refresh(refreshURL, refreshToken)).then(() => {
          dispatch(thunkActions.fetchUser(fetchUserURL, accessToken));
        });
      } catch (error) {
        return null;
      }
    }
  },
});

export default createActions;
