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
exports.findByIDApi = void 0;
const errDBMsgs_1 = require("../errDBMsgs");
const scssDBMsgs_1 = require("../scssDBMsgs");
const findByIDApi = Domain => (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const toDo = yield Domain.findById(id);
        return {
            findByID: true,
            message: scssDBMsgs_1.scssDBMsgs.getByID,
            doc: toDo
        };
    }
    catch (e) {
        return {
            findByID: false,
            message: errDBMsgs_1.errDBMsgs.notFoundOrDatabaseOff,
            doc: {}
        };
    }
});
exports.findByIDApi = findByIDApi;
