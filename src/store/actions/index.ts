export { default as basicActions } from "./basic";
export { default as thunkActions } from "./thunk";

import { ICreateActionsProps, Token } from "../types";
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
});

export default createActions;
