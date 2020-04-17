"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var react_cookie_1 = require("react-cookie");
var cookies = new react_cookie_1.Cookies();
var initialState = {
    access: cookies.get("access") || null,
    refresh: cookies.get("refresh") || null,
    user: null,
};
var authenticationReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case types_1.ActionTypes.SET_TOKEN:
            var access = payload.access, refresh = payload.refresh;
            cookies.set("access", access);
            cookies.set("refresh", refresh);
            return Object.assign({}, state, payload);
        case types_1.ActionTypes.UPDATE_TOKEN:
            cookies.set("access", payload);
            return Object.assign({}, state, { access: payload });
        case types_1.ActionTypes.REMOVE_TOKEN:
            cookies.remove("access");
            cookies.remove("refresh");
            return Object.assign({}, state, {
                access: null,
                refresh: null,
            });
        case types_1.ActionTypes.SET_USER:
            return Object.assign({}, state, { user: payload });
        case types_1.ActionTypes.REMOVE_USER:
            return Object.assign({}, state, { user: null });
        default:
            return state;
    }
};
exports.default = authenticationReducer;
