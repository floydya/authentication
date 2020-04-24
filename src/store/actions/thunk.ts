import { Result, Dispatch, Token } from "../types";
import Axios from "axios";
import basicActions from "./basic";

const login = (loginURL: string, loginData: any): Result<void> => async (dispatch) => {
  await Axios.post(loginURL, loginData).then(
    ({ data }) => dispatch(basicActions.setToken(data))
  )
}

const logout = (): Result<void> => (dispatch: Dispatch) => {
  dispatch(basicActions.removeUser())
  dispatch(basicActions.removeToken())
}

const verify = (verifyURL: string, accessToken: Token = undefined): Result<Promise<void>>  => async (dispatch, getState) => {
  if (!accessToken) accessToken = getState().authentication.access
  await Axios.post(verifyURL, {token: accessToken})
}

const refresh = (refreshURL: string, refreshToken: Token = undefined): Result<Promise<void>> => async (dispatch, getState) => {
  if (!refreshToken) refreshToken = getState().authentication.refresh
  await Axios.post(refreshURL, {refresh: refreshToken}).then(
    ({data}) => dispatch(basicActions.updateToken(data.access))
  )
}

const fetchUser = (fetchUserURL: string, accessToken: Token = undefined): Result<Promise<void>> => async (dispatch, getState) => {
  if (!accessToken) accessToken = getState().authentication.access
  await Axios.get(fetchUserURL, { headers: {Authorization: `JWT ${accessToken}`}}).then(
    ({ data }) => dispatch(basicActions.setUser(data))
  )
}

export default { login, logout, verify, refresh, fetchUser }
