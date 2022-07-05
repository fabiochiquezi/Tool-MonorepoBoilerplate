"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseStd = void 0;
const responseStd = (res, status = 500, ok, message, data) => {
    return res
        .status(status)
        .json({
        ok,
        message,
        data
    })
        .end();
};
exports.responseStd = responseStd;
