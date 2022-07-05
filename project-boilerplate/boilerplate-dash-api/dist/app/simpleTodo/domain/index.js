"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTodoDomain = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fields = {
    content: {
        type: String,
        require: [true, 'Please add a text value']
    }
};
const timeStamps = { timestamps: true };
const simpleTodoSchema = new mongoose_1.default.Schema(fields, timeStamps);
exports.SimpleTodoDomain = mongoose_1.default.model('simpleTodo', simpleTodoSchema);
