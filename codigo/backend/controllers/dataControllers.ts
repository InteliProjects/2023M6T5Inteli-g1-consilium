// Importa os tipos Request e Response do módulo 'express'.
import { Request, Response } from 'express';

// Importa o serviço 'dataService' do diretório '../services'.
import { dataService } from '../services/dataService';

// Define a classe DataController.
class DataController {
  /**
   * Obtém todos os dados.
   */
  async getAllData(req: Request, res: Response) {
    // Chama a função assíncrona 'getAllData' do serviço 'dataService'.
    const data = await dataService.getAllData();
    // Envia a resposta como JSON contendo os dados obtidos.
    res.json(data);
  }

  /**
   * Obtém os dados por ID.
   */
  async getDataById(req: Request, res: Response) {
    // Obtém o parâmetro 'id' da requisição.
    const { id } = req.params;
    // Chama a função assíncrona 'getDataById' do serviço 'dataService' passando o 'id'.
    const data = await dataService.getDataById(id);
    // Envia a resposta como JSON contendo os dados obtidos.
    res.json(data);
  }

  /**
   * Cria novos dados.
   */
  async createData(req: Request, res: Response) {
    // Obtém o nome do arquivo da requisição, se existir.
    const fileName = req.file?.originalname;

    // Verifica se o nome do arquivo existe.
    if (!fileName) {
      // Retorna uma resposta de erro com status 400 se o nome do arquivo estiver ausente.
      return res.status(400).json({ error: 'Arquivo ausente' });
    }
    
    // Chama a função assíncrona 'createData' do serviço 'dataService' passando o nome do arquivo.
    const data = await dataService.createData(fileName);
    // Envia a resposta como JSON contendo os dados criados.
    res.json(data);
  }

  /**
   * Deleta os dados.
   */
  async deleteData(req: Request, res: Response) {
    // Obtém o parâmetro 'id' da requisição.
    const { id } = req.params;
    // Chama a função assíncrona 'deleteData' do serviço 'dataService' passando o 'id'.
    const data = await dataService.deleteData(id);
    // Envia a resposta como JSON contendo os dados deletados.
    res.json(data);
  }
}

// Exporta uma instância da classe DataController.
export const dataController = new DataController();
