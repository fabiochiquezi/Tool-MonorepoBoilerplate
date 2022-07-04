"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = void 0;
const auth_1 = require("firebase/auth");
const successMessages_1 = require("../successMessages");
const errMessages_1 = require("../errMessages");
const helpers_front_1 = require("helpers-front");
const signInStandard = (res, errMsg, successsMsg, signIn) => auth => (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = data;
        const credential = yield signIn(auth, email, password);
        const user = credential.user;
        const dataRes = { credential, user };
        return res(true, successsMsg.signIn, { data: dataRes }, 200);
    }
    catch (e) {
        const error = errMsg(e.message);
        return res(false, error, e, 400);
    }
});
exports.signIn = signInStandard(helpers_front_1.response, errMessages_1.getError, successMessages_1.successMessage, auth_1.signInWithEmailAndPassword);
