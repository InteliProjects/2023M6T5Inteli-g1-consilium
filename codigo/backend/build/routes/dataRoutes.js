"use strict";
/**
 * @module dataRoutes
 * Este módulo define as rotas para operações relacionadas a dados.
 * Ele importa os módulos necessários e configura o multer para o upload de arquivos.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataControllers_1 = require("../controllers/dataControllers");
const multer_1 = __importDefault(require("multer"));
// Cria um roteador express
const router = express_1.default.Router();
// Configurando o multer com um armazenamento personalizado
const storage = multer_1.default.diskStorage({
    /**
     * @function
     * @description Define o destino do armazenamento para os arquivos enviados.
     * @param {Object} req - Objeto da requisição.
     * @param {Object} file - Objeto representando o arquivo enviado.
     * @param {Function} cb - Callback para indicar o nome do arquivo.
     */
    destination: 'public/',
    /**
     * @function
     * @description Define o nome do arquivo como o nome original do arquivo enviado.
     * @param {Object} req - Objeto da requisição.
     * @param {Object} file - Objeto representando o arquivo enviado.
     * @param {Function} cb - Callback para indicar o nome do arquivo.
     */
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Usando o nome original do arquivo
    },
});
const upload = (0, multer_1.default)({ storage: storage });
/**
 * @description Rota GET para /.
 * Esta rota chama a função obterTodosDados do controlador de dados.
 * @name GET/
 * @function
 * @memberof module:dataRoutes
 */
router.get('/', dataControllers_1.dataController.getAllData);
/**
 * @description Rota GET para /:id.
 * Esta rota chama a função obterDadosPorId do controlador de dados.
 * @name GET/:id
 * @function
 * @memberof module:dataRoutes
 * @param {string} id - O identificador único dos dados a serem recuperados.
 */
router.get('/:id', dataControllers_1.dataController.getDataById);
/**
 * @description Rota POST para /.
 * Esta rota usa o middleware multer para o upload de um arquivo e, em seguida, chama a função criarDados do controlador de dados.
 * @name POST/
 * @function
 * @memberof module:dataRoutes
 * @param {string} file - O arquivo a ser enviado.
 */
router.post('/', upload.single('file'), dataControllers_1.dataController.createData);
/**
 * @description Rota DELETE para /:id.
 * Esta rota chama a função deletarDados do controlador de dados.
 * @name DELETE/:id
 * @function
 * @memberof module:dataRoutes
 * @param {string} id - O identificador único dos dados a serem deletados.
 */
router.delete('/:id', dataControllers_1.dataController.deleteData);
// Exporta o roteador
exports.default = router;
