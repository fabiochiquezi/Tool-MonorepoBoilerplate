"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAuth = exports.fireSettings = void 0;
const signIn_1 = require("./auth/signIn");
const signOut_1 = require("./auth/signOut");
const signUp_1 = require("./auth/signUp");
const authState_1 = require("./auth/authState");
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const fireSettings = (firebaseConfig) => {
    const app = (0, app_1.initializeApp)(firebaseConfig);
    const auth = (0, auth_1.getAuth)(app);
    const emulatorObj = (url) => (0, auth_1.connectAuthEmulator)(auth, url);
    return {
        app,
        auth,
        emulator: emulatorObj
    };
};
exports.fireSettings = fireSettings;
const firebaseAuth = (auth) => ({
    signIn: (0, signIn_1.signIn)(auth),
    signOut: (0, signOut_1.goOut)(auth),
    signUp: (0, signUp_1.signUp)(auth),
    state: (0, authState_1.authState)(auth)
});
exports.firebaseAuth = firebaseAuth;
