"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
describe('UserService', () => {
    afterAll(async () => {
        await prisma.$disconnect();
    });
    // Teste para garantir que todos os usuários possam ser obtidos
    it('deve obter todos os usuários', async () => {
        const users = await userService_1.default.getAllUsers();
        expect(users).toBeDefined();
    });
    // Teste para garantir que um novo usuário pode ser criado com sucesso
    it('deve criar um novo usuário', async () => {
        const uniqueEmail = `testuser_${Date.now()}@example.com`;
        const newUser = await userService_1.default.createUser('John Doe', uniqueEmail, 'password');
        expect(newUser).toBeDefined();
    });
    // Teste para garantir que um usuário pode ser obtido por ID
    it('deve obter usuário por ID', async () => {
        var _a;
        // Obtém todos os usuários do banco de dados
        const users = await prisma.user.findMany();
        // Seleciona o ID do primeiro usuário (se existir)
        const userId = (_a = users[0]) === null || _a === void 0 ? void 0 : _a.id;
        // Obtém o usuário usando o ID
        const user = await userService_1.default.getUserById(userId);
        expect(user).toBeDefined();
    });
    // Teste para verificar a disponibilidade de e-mail
    it('deve verificar a disponibilidade do e-mail', async () => {
        const email = 'testemail@example.com';
        const isEmailAvailable = await userService_1.default.checkEmailAvailability(email);
        expect(isEmailAvailable).toBeDefined();
    });
    // Teste para atualizar as informações de um usuário
    it('deve atualizar as informações do usuário', async () => {
        var _a;
        // Assumindo que existe pelo menos um usuário no banco de dados
        const users = await prisma.user.findMany();
        const userId = (_a = users[0]) === null || _a === void 0 ? void 0 : _a.id;
        // Certifique-se de que userId existe antes de chamar o updateUser
        if (!userId) {
            throw new Error('Nenhum usuário encontrado para atualizar.');
        }
        const user = await userService_1.default.getUserById(userId);
        // Simula a atualização do usuário com uma nova senha
        const updatedUser = await userService_1.default.updateUser(userId, 'Novo Nome', 'novoemail@example.com', 'novasenha', 'senha123');
        expect(updatedUser).toBeDefined();
    });
    // Teste para excluir um usuário
    it('deve excluir um usuário', async () => {
        var _a;
        // Assumindo que existe pelo menos um usuário no banco de dados
        const users = await prisma.user.findMany();
        const userId = (_a = users[0]) === null || _a === void 0 ? void 0 : _a.id;
        // Certifique-se de que userId existe antes de chamar o deleteUser
        if (!userId) {
            throw new Error('Nenhum usuário encontrado para excluir.');
        }
        await userService_1.default.deleteUser(userId, 'senha123');
        // Verifique se o usuário foi excluído
        const deletedUser = await userService_1.default.getUserById(userId);
        expect(deletedUser).toBeNull();
    });
});
