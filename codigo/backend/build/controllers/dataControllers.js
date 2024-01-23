"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataController = void 0;
// Importa o serviço 'dataService' do diretório '../services'.
const dataService_1 = require("../services/dataService");
// Define a classe DataController.
class DataController {
    /**
     * Obtém todos os dados.
     */
    async getAllData(req, res) {
        // Chama a função assíncrona 'getAllData' do serviço 'dataService'.
        const data = await dataService_1.dataService.getAllData();
        // Envia a resposta como JSON contendo os dados obtidos.
        res.json(data);
    }
    /**
     * Obtém os dados por ID.
     */
    async getDataById(req, res) {
        // Obtém o parâmetro 'id' da requisição.
        const { id } = req.params;
        // Chama a função assíncrona 'getDataById' do serviço 'dataService' passando o 'id'.
        const data = await dataService_1.dataService.getDataById(id);
        // Envia a resposta como JSON contendo os dados obtidos.
        res.json(data);
    }
    /**
     * Cria novos dados.
     */
    async createData(req, res) {
        var _a;
        // Obtém o nome do arquivo da requisição, se existir.
        const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname;
        // Verifica se o nome do arquivo existe.
        if (!fileName) {
            // Retorna uma resposta de erro com status 400 se o nome do arquivo estiver ausente.
            return res.status(400).json({ error: 'Arquivo ausente' });
        }
        // Chama a função assíncrona 'createData' do serviço 'dataService' passando o nome do arquivo.
        const data = await dataService_1.dataService.createData(fileName);
        // Envia a resposta como JSON contendo os dados criados.
        res.json(data);
    }
    /**
     * Deleta os dados.
     */
    async deleteData(req, res) {
        // Obtém o parâmetro 'id' da requisição.
        const { id } = req.params;
        // Chama a função assíncrona 'deleteData' do serviço 'dataService' passando o 'id'.
        const data = await dataService_1.dataService.deleteData(id);
        // Envia a resposta como JSON contendo os dados deletados.
        res.json(data);
    }
}
// Exporta uma instância da classe DataController.
exports.dataController = new DataController();
