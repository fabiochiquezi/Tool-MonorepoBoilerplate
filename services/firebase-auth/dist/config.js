"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firebaseConfig = {
    apiKey: 'AIzaSyBr0_xNz0Ck-XBncLK66rS0OobTzFy77xQ',
    authDomain: 'toolnextjsboilerplate.firebaseapp.com',
    projectId: 'toolnextjsboilerplate',
    storageBucket: 'toolnextjsboilerplate.appspot.com',
    messagingSenderId: '79575065167',
    appId: '1:79575065167:web:ffcae889d3fe9f3295803a',
    measurementId: 'G-YWJT05RWPL'
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
if (process.env.NODE_ENV === 'development') {
    (0, auth_1.connectAuthEmulator)(exports.auth, 'http://localhost:9099');
}
