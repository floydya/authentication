import { ISetToken, IAPITokenResponse, IRemoveToken, ISetUser, UserType, IRemoveUser, ICreateActionsProps, IUpdateToken } from "./types";
export declare const reduxActions: {
    setToken: (payload: IAPITokenResponse<string>) => ISetToken;
    updateToken: (payload: string) => IUpdateToken;
    removeToken: () => IRemoveToken;
    setUser: (payload: UserType) => ISetUser;
    removeUser: () => IRemoveUser;
};
export declare const createActions: ({ create, refresh, verify, me, }: ICreateActionsProps) => {
    login: (loginData: any) => import("redux-thunk").ThunkAction<Promise<{
        error?: any;
    }>, import("./types").IState, undefined, import("./types").ActionType>;
    refresh: () => import("redux-thunk").ThunkAction<void, import("./types").IState, undefined, import("./types").ActionType>;
    verify: () => import("redux-thunk").ThunkAction<void, import("./types").IState, undefined, import("./types").ActionType>;
    fetchUser: () => import("redux-thunk").ThunkAction<void, import("./types").IState, undefined, import("./types").ActionType>;
};
export default createActions;
