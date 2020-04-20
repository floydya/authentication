import { Dispatch } from "../types";
declare const _default: {
    login: (loginURL: string, loginData: any) => import("redux-thunk").ThunkAction<void, import("../types").IRootState, undefined, import("../types").ActionType>;
    logout: () => (dispatch: Dispatch) => void;
    verify: (verifyURL: string, accessToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<void>, import("../types").IRootState, undefined, import("../types").ActionType>;
    refresh: (refreshURL: string, refreshToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<void>, import("../types").IRootState, undefined, import("../types").ActionType>;
    fetchUser: (fetchUserURL: string, accessToken?: string | null | undefined) => import("redux-thunk").ThunkAction<Promise<void>, import("../types").IRootState, undefined, import("../types").ActionType>;
};
export default _default;
