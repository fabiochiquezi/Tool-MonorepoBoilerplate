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
exports.signUp = void 0;
const auth_1 = require("firebase/auth");
const successMessages_1 = require("../successMessages");
const res_1 = require("../../helpers/res");
const errMessages_1 = require("../errMessages");
const config_1 = require("../../config");
const signUpStandard = (res, errMsg, signUp) => (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = data;
        const newUser = yield signUp(config_1.auth, email, password);
        return res(true, 201, successMessages_1.successMessage.signUp, { newUser });
    }
    catch (e) {
        const error = errMsg(e.message);
        return res(false, 400, error, {});
    }
});
exports.signUp = signUpStandard(res_1.resp, errMessages_1.getError, auth_1.createUserWithEmailAndPassword);
