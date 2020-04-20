import { IRemoveUser, ISetUser, IRemoveToken, IUpdateToken, IAPITokenResponse, ISetToken } from "../types";
declare const basicActions: {
    setToken: (payload: IAPITokenResponse<string>) => ISetToken;
    updateToken: (payload: string) => IUpdateToken;
    removeToken: () => IRemoveToken;
    setUser: (payload: any) => ISetUser;
    removeUser: () => IRemoveUser;
};
export default basicActions;
