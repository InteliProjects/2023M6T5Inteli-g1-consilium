// Importa os tipos Request e Response do módulo 'express'.
import { Request, Response } from 'express';

// Importa o serviço 'UserService' do diretório '../services'.
import UserService from '../services/userService';

// Define o controlador UserController.
const UserController = {
  /**
   * Obtém todos os usuários.
   */
  async getAllUsers(req: Request, res: Response) {
    try {
      // Chama a função assíncrona 'getAllUsers' do serviço 'UserService'.
      const users = await UserService.getAllUsers();
      // Envia a resposta como JSON contendo os usuários obtidos.
      res.json(users);
    } catch (error) {
      console.error(error);
      // Retorna uma resposta de erro com status 500 se ocorrer um erro ao buscar usuários.
      res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
  },

  /**
   * Obtém um usuário pelo ID.
   */
  async getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    try {
      // Chama a função assíncrona 'getUserById' do serviço 'UserService' passando o 'userId'.
      const user = await UserService.getUserById(userId);
      // Verifica se o usuário foi encontrado e envia a resposta correspondente.
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      }
    } catch (error) {
      console.error(error);
      // Retorna uma resposta de erro com status 500 se ocorrer um erro ao buscar o usuário.
      res.status(500).json({ error: 'Erro ao buscar o usuário.' });
    }
  },

  /**
   * Cria um novo usuário.
   */
  async createUser(req: Request, res: Response) {
    // Obtém os dados do usuário do corpo da requisição.
    const { name, email, password } = req.body;
    try {
      // Chama a função assíncrona 'createUser' do serviço 'UserService' passando os dados do usuário.
      const newUser = await UserService.createUser(name, email, password);
      // Envia a resposta como JSON contendo o novo usuário criado.
      res.json(newUser);
    } catch (error) {
      console.error(error);
      // Retorna uma resposta de erro com status 500 se ocorrer um erro ao criar o usuário.
      res.status(500).json({ error: 'Erro ao criar um usuário.' });
    }
  },

  /**
   * Atualiza um usuário.
   */
  async updateUser(req: Request, res: Response) {
    // Obtém o parâmetro 'id' da requisição.
    const userId = req.params.id;
    // Obtém os dados do usuário do corpo da requisição.
    const { name, email, password, currentPassword } = req.body;
    try {
      // Chama a função assíncrona 'updateUser' do serviço 'UserService' passando os dados do usuário.
      const updatedUser = await UserService.updateUser(userId, name, email, password, currentPassword);
      // Envia a resposta como JSON contendo o usuário atualizado.
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      // Retorna uma resposta de erro com status 500 se ocorrer um erro ao atualizar o usuário.
      res.status(500).json({ error: 'Erro ao atualizar o usuário.' });
    }
  },

  /**
   * deleta um usuário.
   */
  async deleteUser(req: Request, res: Response) {
    // Obtém o parâmetro 'id' da requisição.
    const userId = req.params.id;
    // Obtém a senha do corpo da requisição.
    const { password } = req.body; 
    try {
      // Chama a função assíncrona 'deleteUser' do serviço 'UserService' passando o 'userId' e a senha.
      await UserService.deleteUser(userId, password);
      // Envia a resposta de sucesso.
      res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      // Retorna uma resposta de erro com status 500 se ocorrer um erro ao excluir o usuário.
      res.status(500).json({ error: 'Erro ao excluir o usuário.' });
    }
  },

  /**
   * verifica se o email já está sendo usado.
   */
  async checkEmailAvailability(req: Request, res: Response) {
    // Obtém o email do corpo da requisição.
    const { email } = req.body;
    try {
      // Chama a função assíncrona 'checkEmailAvailability' do serviço 'UserService' passando o email.
      const isEmailTaken = await UserService.checkEmailAvailability(email);
      // Envia a resposta como JSON contendo a disponibilidade do email.
      res.json({ isEmailTaken });
    } catch (error) {
      console.error(error);
      // Retorna uma resposta de erro com status 500 se ocorrer um erro ao verificar a disponibilidade do email.
      res.status(500).json({ error: 'Erro ao verificar a disponibilidade do e-mail.' });
    }
  },
};

// Exporta o controlador UserController.
export default UserController;