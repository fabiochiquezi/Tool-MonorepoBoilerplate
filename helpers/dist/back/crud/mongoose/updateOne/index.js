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
exports.updateOneApi = void 0;
const scssDBMsgs_1 = require("../scssDBMsgs");
const errDBMsgs_1 = require("../errDBMsgs");
const updateOneApi = doc => (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        doc.updateOne({ data });
        return { update: true, message: scssDBMsgs_1.scssDBMsgs.put };
    }
    catch (e) {
        return {
            update: false,
            message: errDBMsgs_1.errDBMsgs.notFoundOrDatabaseOff
        };
    }
});
exports.updateOneApi = updateOneApi;
