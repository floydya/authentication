import { IState, ActionType, ActionTypes } from "./types";

const initialState: IState = {
  access: null,
  refresh: null,
  user: null,
};

const authenticationReducer = (
  state = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case ActionTypes.SET_TOKEN:
      return Object.assign({}, state, payload);
    case ActionTypes.UPDATE_TOKEN:
      return Object.assign({}, state, { access: payload });
    case ActionTypes.REMOVE_TOKEN:
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
