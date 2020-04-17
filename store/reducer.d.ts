import { IState, ActionType } from "./types";
declare const authenticationReducer: (state: IState | undefined, { type, payload }: ActionType) => any;
export default authenticationReducer;
