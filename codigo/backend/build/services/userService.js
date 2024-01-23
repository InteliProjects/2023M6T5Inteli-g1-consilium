"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o cliente Prisma para interagir com o banco de dados
const client_1 = require("@prisma/client");
// Importa a biblioteca de hash de senhas bcrypt
const bcrypt_1 = __importDefault(require("bcrypt"));
// Instancia o cliente Prisma
const prisma = new client_1.PrismaClient();
// Número de rounds de hashing para o bcrypt
const saltRounds = 5;
// Objeto UserService contendo métodos para manipulação de usuários
const UserService = {
    // Obtém todos os usuários
    getAllUsers() {
        return prisma.user.findMany();
    },
    // Cria um novo usuário com senha hashada
    async createUser(name, email, password) {
        // Hash da senha usando bcrypt
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        // Criação do usuário no banco de dados
        return prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
    },
    // Obtém um usuário pelo ID
    async getUserById(userId) {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return user;
    },
    // Atualiza informações do usuário, incluindo a possibilidade de alterar a senha
    async updateUser(userId, name, email, password, currentPassword) {
        // Obtém o usuário pelo ID
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        // Verifica se o usuário existe
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        // Verifica se a senha atual está correta usando bcrypt
        const isPasswordValid = await bcrypt_1.default.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            throw new Error("Senha atual incorreta");
        }
        // Hash da nova senha, se fornecida
        let hashedPassword = user.password;
        if (password) {
            hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        }
        // Atualiza o usuário no banco de dados
        return prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                email,
                password: hashedPassword,
            },
        });
    },
    // Exclui um usuário com verificação de senha
    deleteUser(userId, password) {
        // Obtém o usuário pelo ID
        return prisma.user.findUnique({
            where: {
                id: userId,
            },
        }).then((user) => {
            // Verifica se o usuário existe
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados usando bcrypt
            return bcrypt_1.default.compare(password, user.password).then((passwordMatch) => {
                // Senhas correspondem, exclui o usuário
                if (passwordMatch) {
                    return prisma.user.delete({
                        where: {
                            id: userId,
                        },
                    });
                }
                else {
                    throw new Error("Senha incorreta");
                }
            });
        });
    },
    // Verifica a disponibilidade de um endereço de e-mail
    async checkEmailAvailability(email) {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return !!existingUser;
    },
};
// Exporta o objeto UserService
exports.default = UserService;
