"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var initialState = {
    access: null,
    refresh: null,
    user: null,
};
var authenticationReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case types_1.ActionTypes.SET_TOKEN:
            return Object.assign({}, state, payload);
        case types_1.ActionTypes.UPDATE_TOKEN:
            return Object.assign({}, state, { access: payload });
        case types_1.ActionTypes.REMOVE_TOKEN:
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
