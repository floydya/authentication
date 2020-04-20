export { default as basicActions } from "./basic";
export { default as thunkActions } from "./thunk";
import { ICreateActionsProps } from "../types";
declare const createActions: ({ loginURL, verifyURL, refreshURL, fetchUserURL, }: ICreateActionsProps) => {
    login: (loginData: any) => import("redux-thunk").ThunkAction<any, import("../types").IRootState, undefined, import("../types").ActionType>;
    verify: (accessToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<any>, import("../types").IRootState, undefined, import("../types").ActionType>;
    refresh: (refreshToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<any>, import("../types").IRootState, undefined, import("../types").ActionType>;
    fetchUser: (accessToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<any>, import("../types").IRootState, undefined, import("../types").ActionType>;
};
export default createActions;
