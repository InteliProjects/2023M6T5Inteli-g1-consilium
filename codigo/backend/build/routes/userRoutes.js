"use strict";
/**
 * @module userRoutes
 * Este módulo define as rotas para operações relacionadas a usuários.
 * Ele importa o controlador de usuário necessário.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = __importDefault(require("../controllers/userControllers"));
// Cria um roteador express
const router = (0, express_1.Router)();
/**
 * @description Rota GET para /.
 * Esta rota chama a função getAllUsers do controlador de usuários para obter uma lista de todos os usuários.
 * @name GET/
 * @function
 * @memberof module:userRoutes
 */
router.get('/', userControllers_1.default.getAllUsers);
/**
 * @description Rota POST para /.
 * Esta rota chama a função createUser do controlador de usuários para criar um novo usuário.
 * @name POST/
 * @function
 * @memberof module:userRoutes
 */
router.post('/', userControllers_1.default.createUser);
/**
 * @description Rota POST para /checkEmail.
 * Esta rota chama a função checkEmailAvailability do controlador de usuários para verificar se o email já está sendo usado.
 * @name POST/checkEmail
 * @function
 * @memberof module:userRoutes
 */
router.post('/checkEmail', userControllers_1.default.checkEmailAvailability);
/**
 * @description Rota GET para /:id.
 * Esta rota chama a função getUserById do controlador de usuários para obter informações de um usuário específico pelo ID.
 * @name GET/:id
 * @function
 * @memberof module:userRoutes
 * @param {string} id - O identificador único do usuário a ser recuperado.
 */
router.get('/:id', userControllers_1.default.getUserById);
/**
 * @description Rota PUT para /:id.
 * Esta rota chama a função updateUser do controlador de usuários para atualizar as informações de um usuário específico pelo ID.
 * @name PUT/:id
 * @function
 * @memberof module:userRoutes
 * @param {string} id - O identificador único do usuário a ser atualizado.
 */
router.put('/:id', userControllers_1.default.updateUser);
/**
 * @description Rota DELETE para /:id.
 * Esta rota chama a função deleteUser do controlador de usuários para excluir um usuário específico pelo ID.
 * @name DELETE/:id
 * @function
 * @memberof module:userRoutes
 * @param {string} id - O identificador único do usuário a ser excluído.
 */
router.delete('/:id', userControllers_1.default.deleteUser);
// Exporta o roteador
exports.default = router;
