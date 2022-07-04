"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resp = void 0;
const resp = (res, status, ok, message = '', data = {}) => res.status(status).json({ ok, message, data }).end();
exports.resp = resp;
