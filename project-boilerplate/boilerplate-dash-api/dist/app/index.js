"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("./share");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./simpleTodo/routes");
const makeApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use('/api/simple-todo', routes_1.simpleTodoRouter);
    app.use(share_1.errrorHandler);
    return app;
};
exports.default = makeApp;
