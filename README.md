```js
import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
// import { IState } from "@floydya/authentication/store/types";
import { authenticationReducer, createActions } from "@floydya/authentication";

const middlewares = [thunk];

// DEV ONLY
/*
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
*/
const composeEnhancers = compose;

const store = createStore(
  authenticationReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// const thunkDispatch = (callable: any) =>
//   (store.dispatch as ThunkDispatch<IState, void, AnyAction>)(callable);

const actions = createActions({
  create: "http://api.exchange.com/api/v1/auth/jwt/create/",
  verify: "http://api.exchange.com/api/v1/auth/jwt/verify/",
  refresh: "http://api.exchange.com/api/v1/auth/jwt/refresh/",
  me: "http://api.exchange.com/api/v1/auth/users/me/",
});

store.subscribe(() => console.log(store.getState()));

thunkDispatch(
  actions.login({ email: "admin@admin.com", password: "admin12345" })
);
setTimeout(() => thunkDispatch(actions.fetchUser()), 1000);

setTimeout(() => thunkDispatch(actions.verify()), 2000);
setTimeout(() => thunkDispatch(actions.refresh()), 3000);
```
