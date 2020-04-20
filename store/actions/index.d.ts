export { default as basicActions } from "./basic";
export { default as thunkActions } from "./thunk";
import { ICreateActionsProps, Dispatch } from "../types";
declare const createActions: ({ loginURL, verifyURL, refreshURL, fetchUserURL, }: ICreateActionsProps) => {
    login: (loginData: any) => import("redux-thunk").ThunkAction<void, import("../types").IRootState, undefined, import("../types").ActionType>;
    verify: (accessToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<void>, import("../types").IRootState, undefined, import("../types").ActionType>;
    refresh: (refreshToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<void>, import("../types").IRootState, undefined, import("../types").ActionType>;
    fetchUser: (accessToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<void>, import("../types").IRootState, undefined, import("../types").ActionType>;
    initializeStore: (accessToken: string, refreshToken: string) => Promise<(dispatch: Dispatch) => null | undefined>;
};
export default createActions;
