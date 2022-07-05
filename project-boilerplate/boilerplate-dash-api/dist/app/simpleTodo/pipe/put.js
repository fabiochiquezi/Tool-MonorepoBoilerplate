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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPipe = void 0;
const share_1 = require("../../share");
const domain_1 = require("../domain");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const helpers_1 = require("../../../helpers");
const putFn = (Domain, validationFn, responseFn) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { valid, errors } = validationFn(req);
    if (!valid) {
        responseFn(res, 400, false, share_1.errMessages.requestDataErr, errors);
    }
}));
exports.putPipe = putFn(domain_1.SimpleTodoDomain, helpers_1.validReq, helpers_1.responseStd);
