"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = (0, express_1.default)(); // Cria uma nova instâncai do express
app.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchi = yield (0, node_fetch_1.default)("https://api.github.com/users/ShiftSad").then(res => res.json());
    return response.json({ a: fetchi === null || fetchi === void 0 ? void 0 : fetchi.id });
}));
app.listen(3333, () => {
    console.log('lol!'); //roubou meu coraçaoooooo
}); //awn 
