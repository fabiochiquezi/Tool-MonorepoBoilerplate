"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authState = void 0;
const auth_1 = require("firebase/auth");
const authState = (auth) => (fn) => (0, auth_1.onAuthStateChanged)(auth, fn);
exports.authState = authState;
