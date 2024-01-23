"use strict";
/**
 * @module algorithmsRoutes
 * Este módulo define as rotas para os algoritmos.
 * Ele importa os módulos necessários e define rotas POST para os algoritmos PSO e Simplex.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa os módulos necessários
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const algorithmsControllers_1 = __importDefault(require("../controllers/algorithmsControllers"));
// Cria um roteador express
const router = express_1.default.Router();
// Configura o multer para o upload de arquivos
const upload = (0, multer_1.default)();
/**
 * @description Rota POST para /pso.
 * Esta rota utiliza o middleware multer para o upload de dois arquivos e, em seguida, chama a função runPSO do controlador de algoritmos.
 * @name POST/pso
 * @function
 * @memberof module:algorithmsRoutes
 * @param {string} path - O caminho da rota.
 * @param {Function} middleware - O middleware multer para o upload de arquivos.
 * @param {Function} controller - A função do controlador de algoritmos que executa o algoritmo PSO.
 */
router.post('/pso', upload.fields([{ name: 'dfTecnicos', maxCount: 1 }, { name: 'dfPedidos', maxCount: 1 }]), algorithmsControllers_1.default.runPSO);
/**
 * @description Rota POST para /simplex.
 * Esta rota utiliza o middleware multer para o upload de dois arquivos e, em seguida, chama a função runSimplex do controlador de algoritmos.
 * @name POST/simplex
 * @function
 * @memberof module:algorithmsRoutes
 * @param {string} path - O caminho da rota.
 * @param {Function} middleware - O middleware multer para o upload de arquivos.
 * @param {Function} controller - A função do controlador de algoritmos que executa o algoritmo Simplex.
 */
router.post('/simplex', upload.fields([{ name: 'dfTecnicos', maxCount: 1 }, { name: 'dfPedidos', maxCount: 1 }]), algorithmsControllers_1.default.runSimplex);
// Exporta o roteador
exports.default = router;
