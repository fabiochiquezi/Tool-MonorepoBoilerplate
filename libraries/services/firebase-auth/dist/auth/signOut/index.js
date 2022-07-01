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
exports.goOut = void 0;
const successMessages_1 = require("../successMessages");
const errMessages_1 = require("../errMessages");
const auth_1 = require("firebase/auth");
const helpers_1 = require("helpers");
const signOutStandard = (res, errMsg, successsMsg, signOut) => auth => () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield signOut(auth);
        return res(true, 200, successsMsg.signOut, {});
    }
    catch (e) {
        const error = errMsg(e.message);
        return res(false, 400, error, e);
    }
});
exports.goOut = signOutStandard(helpers_1.response, errMessages_1.getError, successMessages_1.successMessage, auth_1.signOut);
