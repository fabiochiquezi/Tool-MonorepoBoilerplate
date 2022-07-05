"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validReq = void 0;
const express_validator_1 = require("express-validator");
const validReq = req => {
    const errors = (0, express_validator_1.validationResult)(req);
    const thereAreErrors = !errors.isEmpty();
    if (thereAreErrors)
        return { valid: false, errors: errors.array() };
    return { valid: true, errors: [] };
};
exports.validReq = validReq;
