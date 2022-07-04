"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validRequest = void 0;
const validRequest = validator => req => {
    const errors = validator(req);
    const thereAreErrors = !errors.isEmpty();
    if (thereAreErrors)
        return { valid: false, errors: errors.array() };
    return { valid: true, errors: [] };
};
exports.validRequest = validRequest;
