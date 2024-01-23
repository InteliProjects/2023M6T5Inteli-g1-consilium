"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o serviço 'UserService' do diretório '../services'.
const userService_1 = __importDefault(require("../services/userService"));
// Define o controlador UserController.
const UserController = {
    /**
     * Obtém todos os usuários.
     */
    async getAllUsers(req, res) {
        try {
            // Chama a função assíncrona 'getAllUsers' do serviço 'UserService'.
            const users = await userService_1.default.getAllUsers();
            // Envia a resposta como JSON contendo os usuários obtidos.
            res.json(users);
        }
        catch (error) {
            console.error(error);
            // Retorna uma resposta de erro com status 500 se ocorrer um erro ao buscar usuários.
            res.status(500).json({ error: 'Erro ao buscar usuários.' });
        }
    },
    /**
     * Obtém um usuário pelo ID.
     */
    async getUserById(req, res) {
        const userId = req.params.id;
        try {
            // Chama a função assíncrona 'getUserById' do serviço 'UserService' passando o 'userId'.
            const user = await userService_1.default.getUserById(userId);
            // Verifica se o usuário foi encontrado e envia a resposta correspondente.
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: 'Usuário não encontrado.' });
            }
        }
        catch (error) {
            console.error(error);
            // Retorna uma resposta de erro com status 500 se ocorrer um erro ao buscar o usuário.
            res.status(500).json({ error: 'Erro ao buscar o usuário.' });
        }
    },
    /**
     * Cria um novo usuário.
     */
    async createUser(req, res) {
        // Obtém os dados do usuário do corpo da requisição.
        const { name, email, password } = req.body;
        try {
            // Chama a função assíncrona 'createUser' do serviço 'UserService' passando os dados do usuário.
            const newUser = await userService_1.default.createUser(name, email, password);
            // Envia a resposta como JSON contendo o novo usuário criado.
            res.json(newUser);
        }
        catch (error) {
            console.error(error);
            // Retorna uma resposta de erro com status 500 se ocorrer um erro ao criar o usuário.
            res.status(500).json({ error: 'Erro ao criar um usuário.' });
        }
    },
    /**
     * Atualiza um usuário.
     */
    async updateUser(req, res) {
        // Obtém o parâmetro 'id' da requisição.
        const userId = req.params.id;
        // Obtém os dados do usuário do corpo da requisição.
        const { name, email, password, currentPassword } = req.body;
        try {
            // Chama a função assíncrona 'updateUser' do serviço 'UserService' passando os dados do usuário.
            const updatedUser = await userService_1.default.updateUser(userId, name, email, password, currentPassword);
            // Envia a resposta como JSON contendo o usuário atualizado.
            res.json(updatedUser);
        }
        catch (error) {
            console.error(error);
            // Retorna uma resposta de erro com status 500 se ocorrer um erro ao atualizar o usuário.
            res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
        }
    },
    /**
     * deleta um usuário.
     */
    async deleteUser(req, res) {
        // Obtém o parâmetro 'id' da requisição.
        const userId = req.params.id;
        // Obtém a senha do corpo da requisição.
        const { password } = req.body;
        try {
            // Chama a função assíncrona 'deleteUser' do serviço 'UserService' passando o 'userId' e a senha.
            await userService_1.default.deleteUser(userId, password);
            // Envia a resposta de sucesso.
            res.json({ message: 'Usuário excluído com sucesso.' });
        }
        catch (error) {
            console.error(error);
            // Retorna uma resposta de erro com status 500 se ocorrer um erro ao excluir o usuário.
            res.status(500).json({ error: 'Erro ao excluir o usuário.' });
        }
    },
    /**
     * verifica se o email já está sendo usado.
     */
    async checkEmailAvailability(req, res) {
        // Obtém o email do corpo da requisição.
        const { email } = req.body;
        try {
            // Chama a função assíncrona 'checkEmailAvailability' do serviço 'UserService' passando o email.
            const isEmailTaken = await userService_1.default.checkEmailAvailability(email);
            // Envia a resposta como JSON contendo a disponibilidade do email.
            res.json({ isEmailTaken });
        }
        catch (error) {
            console.error(error);
            // Retorna uma resposta de erro com status 500 se ocorrer um erro ao verificar a disponibilidade do email.
            res.status(500).json({ error: 'Erro ao verificar a disponibilidade do e-mail.' });
        }
    },
};
// Exporta o controlador UserController.
exports.default = UserController;
