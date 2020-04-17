import { IState, ActionType, ActionTypes } from "./types";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const initialState: IState = {
  access: cookies.get("access") || null,
  refresh: cookies.get("refresh") || null,
  user: null,
};

const authenticationReducer = (
  state = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case ActionTypes.SET_TOKEN:
      const { access, refresh } = payload;
      cookies.set("access", access);
      cookies.set("refresh", refresh);
      return Object.assign({}, state, payload);
    case ActionTypes.UPDATE_TOKEN:
      cookies.set("access", payload);
      return Object.assign({}, state, { access: payload });
    case ActionTypes.REMOVE_TOKEN:
      cookies.remove("access");
      cookies.remove("refresh");
      return Object.assign({}, state, {
        access: null,
        refresh: null,
      });
    case ActionTypes.SET_USER:
      return Object.assign({}, state, { user: payload });
    case ActionTypes.REMOVE_USER:
      return Object.assign({}, state, { user: null });
    default:
      return state;
  }
};

export default authenticationReducer;
