"use strict";
/**
 * Este é o arquivo principal do servidor para nossa aplicação.
 * Ele configura e inicializa o servidor express, incluindo middleware e rotas.
 * Também inicia o servidor ouvindo em uma porta especificada.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa os módulos necessários
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// Importa as rotas
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const algorithmsRoutes_1 = __importDefault(require("./routes/algorithmsRoutes"));
// Cria uma aplicação express
const app = (0, express_1.default)();
const corsOptions = {
    origin: 'http://localhost:4000',
    optionsSeccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
/**
 * Usa o middleware body-parser para analisar corpos de solicitação JSON
 */
app.use(body_parser_1.default.json());
/**
 * Usa o middleware cors para habilitar o compartilhamento de recursos de origem cruzada
 */
app.use((0, cors_1.default)());
// Define a porta em que o servidor irá ouvir
const port = process.env.PORT || 3000;
/**
 * Usa o middleware rotasUsuarios para solicitações para /users
 */
app.use('/users', userRoutes_1.default);
/**
 * Usa o middleware rotasDados para solicitações para /dados
 */
app.use('/data', dataRoutes_1.default);
/**
 * Usa o middleware rotasAlgoritmos para solicitações para /algoritmos
 */
app.use('/algorithms', algorithmsRoutes_1.default);
/**
 * Inicia o servidor ouvindo na porta especificada
 */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
