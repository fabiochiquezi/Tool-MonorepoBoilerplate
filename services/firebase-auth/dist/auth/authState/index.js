"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authState = void 0;
const auth_1 = require("firebase/auth");
const config_1 = require("../../config");
const authStateStandard = (auth) => (fn) => (0, auth_1.onAuthStateChanged)(auth, fn);
exports.authState = authStateStandard(config_1.auth);
