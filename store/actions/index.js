"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = require("./basic");
exports.basicActions = basic_1.default;
var thunk_1 = require("./thunk");
exports.thunkActions = thunk_1.default;
var thunk_2 = __importDefault(require("./thunk"));
var createActions = function (_a) {
    var loginURL = _a.loginURL, verifyURL = _a.verifyURL, refreshURL = _a.refreshURL, fetchUserURL = _a.fetchUserURL;
    return ({
        login: function (loginData) { return thunk_2.default.login(loginURL, loginData); },
        verify: function (accessToken) {
            if (accessToken === void 0) { accessToken = undefined; }
            return thunk_2.default.verify(verifyURL, accessToken);
        },
        refresh: function (refreshToken) {
            if (refreshToken === void 0) { refreshToken = undefined; }
            return thunk_2.default.refresh(refreshURL, refreshToken);
        },
        fetchUser: function (accessToken) {
            if (accessToken === void 0) { accessToken = undefined; }
            return thunk_2.default.fetchUser(fetchUserURL, accessToken);
        },
    });
};
exports.default = createActions;
