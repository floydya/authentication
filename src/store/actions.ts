import axios from "axios";
import {
  ActionTypes,
  ISetToken,
  IAPITokenResponse,
  IRemoveToken,
  ISetUser,
  UserType,
  IRemoveUser,
  ICreateActionsProps,
  IUpdateToken,
  Result,
} from "./types";

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
  setUser: (payload: UserType): ISetUser => ({
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
  refresh: (refreshURL: string): Result<void> => async (dispatch, getState) => {
    const { refresh } = getState();
    await axios.post(refreshURL, { refresh }).then(
      ({ data: { access } }) => dispatch(reduxActions.updateToken(access)),
      () => {
        dispatch(reduxActions.removeUser());
        dispatch(reduxActions.removeToken());
      }
    );
  },
  verify: (verifyURL: string, refreshURL: string): Result<void> => async (
    dispatch,
    getState
  ) => {
    const { access } = getState();
    await axios.post(verifyURL, { token: access }).then(
      () => null,
      () => {
        actions.refresh(refreshURL).bind(null, dispatch, getState)(undefined);
      }
    );
  },
  fetchUser: (fetchUserURL: string): Result<void> => async (
    dispatch,
    getState
  ) => {
    const { access } = getState();
    console.log(access);
    return await axios
      .get(fetchUserURL, { headers: { Authorization: `JWT ${access}` } })
      .then(
        ({ data }) => dispatch(reduxActions.setUser(data)),
        (error) => {
          console.log(error);
          return error;
        }
      );
  },
};

export const createActions = ({
  create,
  refresh,
  verify,
  me,
}: ICreateActionsProps) => ({
  login: (loginData: any) => actions.login(create, loginData),
  refresh: () => actions.refresh(refresh),
  verify: () => actions.verify(verify, refresh),
  fetchUser: () => actions.fetchUser(me),
});

export default createActions;
