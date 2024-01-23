"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataService = void 0;
// Importa o cliente Prisma
const client_1 = require("@prisma/client");
// Instancia o cliente Prisma
const prisma = new client_1.PrismaClient();
// Classe responsável por fornecer métodos para interagir com os dados
class DataService {
    // Obtém todos os dados
    async getAllData() {
        return prisma.data.findMany();
    }
    // Obtém dados por ID
    async getDataById(id) {
        return prisma.data.findUnique({
            where: { id },
        });
    }
    // Cria um novo dado com o nome do arquivo fornecido
    async createData(fileName) {
        // Cria o dado no banco de dados usando o Prisma
        const createdData = await prisma.data.create({
            data: {
                fileName,
            },
        });
        // Retorna o dado recém-criado
        return createdData;
    }
    // Exclui um dado com base no ID
    async deleteData(id) {
        return prisma.data.delete({
            where: { id },
        });
    }
}
// Instanciação de um objeto DataService para ser exportado
exports.dataService = new DataService();
