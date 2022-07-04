"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (ok, message, data = {}, status = 0) => ({
    ok,
    message,
    data,
    status
});
exports.response = response;
