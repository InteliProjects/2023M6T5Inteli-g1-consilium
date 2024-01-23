/**
 * @module algorithmsRoutes
 * Este módulo define as rotas para os algoritmos.
 * Ele importa os módulos necessários e define rotas POST para os algoritmos PSO e Simplex.
 */

// Importa os módulos necessários
import express, { Router } from 'express';
import multer from 'multer';
import algorithmsController from '../controllers/algorithmsControllers';

// Cria um roteador express
const router: Router = express.Router();

// Configura o multer para o upload de arquivos
const upload = multer();

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
router.post('/pso', upload.fields([{ name: 'dfTecnicos', maxCount: 1 }, { name: 'dfPedidos', maxCount: 1 }]), algorithmsController.runPSO);

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
router.post('/simplex', upload.fields([{ name: 'dfTecnicos', maxCount: 1 }, { name: 'dfPedidos', maxCount: 1 }]), algorithmsController.runSimplex);

// Exporta o roteador
export default router;
