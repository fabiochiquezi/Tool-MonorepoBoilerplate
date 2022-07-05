"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errrorHandler = void 0;
const errrorHandler = (err, _req, res, _next) => {
    console.log(err, 'eeeeeeerrrrrrr');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        ok: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
exports.errrorHandler = errrorHandler;
