/**
 * @module dataRoutes
 * Este módulo define as rotas para operações relacionadas a dados.
 * Ele importa os módulos necessários e configura o multer para o upload de arquivos.
 */

import express from 'express';
import { dataController } from '../controllers/dataControllers';
import multer from 'multer';

// Cria um roteador express
const router = express.Router();

// Configurando o multer com um armazenamento personalizado
const storage = multer.diskStorage({
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
    cb(null, file.originalname);  // Usando o nome original do arquivo
  },
});
const upload = multer({ storage: storage });

/**
 * @description Rota GET para /.
 * Esta rota chama a função obterTodosDados do controlador de dados.
 * @name GET/
 * @function
 * @memberof module:dataRoutes
 */
router.get('/', dataController.getAllData);

/**
 * @description Rota GET para /:id.
 * Esta rota chama a função obterDadosPorId do controlador de dados.
 * @name GET/:id
 * @function
 * @memberof module:dataRoutes
 * @param {string} id - O identificador único dos dados a serem recuperados.
 */
router.get('/:id', dataController.getDataById);

/**
 * @description Rota POST para /.
 * Esta rota usa o middleware multer para o upload de um arquivo e, em seguida, chama a função criarDados do controlador de dados.
 * @name POST/
 * @function
 * @memberof module:dataRoutes
 * @param {string} file - O arquivo a ser enviado.
 */
router.post('/', upload.single('file'), dataController.createData);

/**
 * @description Rota DELETE para /:id.
 * Esta rota chama a função deletarDados do controlador de dados.
 * @name DELETE/:id
 * @function
 * @memberof module:dataRoutes
 * @param {string} id - O identificador único dos dados a serem deletados.
 */
router.delete('/:id', dataController.deleteData);

// Exporta o roteador
export default router;
