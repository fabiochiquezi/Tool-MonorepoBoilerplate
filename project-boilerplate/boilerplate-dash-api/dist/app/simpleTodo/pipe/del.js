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
exports.deletePipe = void 0;
const helpers_1 = require("../../../helpers");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const domain_1 = require("../domain");
const delFn = (Domain, responseFn) => (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqID = req.params.id;
    const findDeleteFn = (0, helpers_1.findByIDAndDeleteApi)(Domain);
    const { del, message } = yield findDeleteFn(reqID);
    if (!del) {
        responseFn(res, 400, false, message);
        return;
    }
    responseFn(res, 200, true, message);
}));
exports.deletePipe = delFn(domain_1.SimpleTodoDomain, helpers_1.responseStd);
