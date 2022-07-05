"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleTodoRouter = void 0;
const pipe_1 = require("./pipe");
const dataValid_1 = require("./dataValid");
const express_1 = __importDefault(require("express"));
const simpleTodoRouter = express_1.default.Router();
exports.simpleTodoRouter = simpleTodoRouter;
simpleTodoRouter.post('/', dataValid_1.dataValid, pipe_1.postPipe);
simpleTodoRouter.put('/:id', dataValid_1.dataValid, pipe_1.putPipe);
simpleTodoRouter.get('/', pipe_1.getPipe);
simpleTodoRouter.get('/:id', pipe_1.getOneByIDPipe);
simpleTodoRouter.delete('/:id', pipe_1.deletePipe);
