import { ISetToken, IAPITokenResponse, IRemoveToken, ISetUser, IRemoveUser, ICreateActionsProps, IUpdateToken, ActionType } from "./types";
import { Dispatch } from "react";
export declare const reduxActions: {
    setToken: (payload: IAPITokenResponse<string>) => ISetToken;
    updateToken: (payload: string) => IUpdateToken;
    removeToken: () => IRemoveToken;
    setUser: (payload: any) => ISetUser;
    removeUser: () => IRemoveUser;
};
export declare const createActions: ({ create, refresh, verify, me, }: ICreateActionsProps) => {
    login: (loginData: any) => import("redux-thunk").ThunkAction<Promise<{
        error?: any;
    }>, import("./types").IRootState, undefined, ActionType>;
    refresh: () => import("redux-thunk").ThunkAction<void, import("./types").IRootState, undefined, ActionType>;
    verify: () => import("redux-thunk").ThunkAction<void, import("./types").IRootState, undefined, ActionType>;
    fetchUser: () => import("redux-thunk").ThunkAction<void, import("./types").IRootState, undefined, ActionType>;
    logout: () => (dispatch: Dispatch<ActionType>) => void;
};
export default createActions;
