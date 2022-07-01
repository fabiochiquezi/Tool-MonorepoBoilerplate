"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resp = void 0;
const resp = (ok, status, message, data) => {
    return {
        ok,
        status,
        message,
        data
    };
};
exports.resp = resp;
