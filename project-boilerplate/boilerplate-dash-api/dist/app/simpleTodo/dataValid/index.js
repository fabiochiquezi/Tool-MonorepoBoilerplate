"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataValid = void 0;
const express_validator_1 = require("express-validator");
exports.dataValid = [(0, express_validator_1.body)('content').notEmpty().isString()];
