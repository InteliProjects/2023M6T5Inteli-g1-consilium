"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataService_1 = __importDefault(require("../services/dataService"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
describe('DataService', () => {
    afterAll(async () => {
        await prisma.$disconnect();
    });
    // Testar se é possível obter todos os dados
    it('deve obter todos os dados', async () => {
        const data = await dataService_1.default.getAllData();
        expect(data).toBeDefined();
    });
    // Testar se novos dados podem ser criados com sucesso
    it('deve criar novos dados', async () => {
        const novoArquivo = Buffer.from('dados de exemplo');
        const novoNomeArquivo = `arquivoteste_${Date.now()}.txt`;
        const novosDados = await dataService_1.default.createData(novoArquivo, novoNomeArquivo);
        expect(novosDados).toBeDefined();
    });
    // Testar se é possível obter dados por ID
    it('deve obter dados por ID', async () => {
        var _a;
        // Supondo que haja pelo menos uma entrada de dados no banco de dados
        const entradasDados = await prisma.data.findMany();
        const idDados = (_a = entradasDados[0]) === null || _a === void 0 ? void 0 : _a.id;
        if (!idDados) {
            throw new Error('Nenhum dado encontrado para obter por ID.');
        }
        const dados = await dataService_1.default.getDataById(idDados);
        expect(dados).toBeDefined();
    });
    // Testar a atualização das informações dos dados
    it('deve atualizar as informações dos dados', async () => {
        var _a;
        // Supondo que haja pelo menos uma entrada de dados no banco de dados
        const entradasDados = await prisma.data.findMany();
        const idDados = (_a = entradasDados[0]) === null || _a === void 0 ? void 0 : _a.id;
        if (!idDados) {
            throw new Error('Nenhum dado encontrado para atualizar.');
        }
        const arquivoAtualizado = Buffer.from('dados atualizados');
        const nomeArquivoAtualizado = `arquivo_atualizado_${Date.now()}.txt`;
        const dadosAtualizados = await dataService_1.default.updateData(idDados, arquivoAtualizado, nomeArquivoAtualizado);
        expect(dadosAtualizados).toBeDefined();
    });
    // Testar a exclusão de dados
    it('deve excluir dados', async () => {
        var _a;
        // Supondo que haja pelo menos uma entrada de dados no banco de dados
        const entradasDados = await prisma.data.findMany();
        const idDados = (_a = entradasDados[0]) === null || _a === void 0 ? void 0 : _a.id;
        if (!idDados) {
            throw new Error('Nenhum dado encontrado para excluir.');
        }
        await dataService_1.default.deleteData(idDados);
        // Verificar se os dados foram excluídos
        const dadosExcluidos = await dataService_1.default.getDataById(idDados);
        expect(dadosExcluidos).toBeNull();
    });
});
