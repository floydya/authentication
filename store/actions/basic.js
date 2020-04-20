"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var basicActions = {
    setToken: function (payload) { return ({
        type: types_1.ActionTypes.SET_TOKEN,
        payload: payload,
    }); },
    updateToken: function (payload) { return ({
        type: types_1.ActionTypes.UPDATE_TOKEN,
        payload: payload,
    }); },
    removeToken: function () { return ({ type: types_1.ActionTypes.REMOVE_TOKEN }); },
    setUser: function (payload) { return ({
        type: types_1.ActionTypes.SET_USER,
        payload: payload,
    }); },
    removeUser: function () { return ({ type: types_1.ActionTypes.REMOVE_USER }); },
};
exports.default = basicActions;
