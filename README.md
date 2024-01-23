<table>
<tr>
<td>
<a href= "https://vtal.com"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Vtal_logo_2022.png" alt="V.tal" border="0" width="60%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="./inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="50%"></a>
</td>
</tr>
</table>

# Projeto: *Algoritmo de otimização para alocação e distribuição de equipes de técnicos*

# Grupo: *Consilium*

# Integrantes:

* <a href="https://br.linkedin.com/in/bruno-wasserstein-04b6b1209"> Bruno Wasserstein </a>
* <a href="https://www.linkedin.com/in/enya-oliveira-636566240/"> Enya Oliveira Arruda </a>
* <a href="https://www.linkedin.com/in/gabriel-gallo-m-coutinho-443809232/"> Gabriel Gallo Menequini Coutinho </a>
* <a href="https://www.linkedin.com/in/giuliano-bontempo-domiciano-5b5766212/"> Giuliano Bontempo Domiciano </a>
* <a href="https://www.linkedin.com/in/henrique-godoy-879138252/"> Henrique Rodrigues de Godoy </a>
* <a href="https://www.linkedin.com/in/raab-iane/"> Raab Iane Assunção Silva </a>

# Descrição

Algoritmo para otimização da alocação de técnicos de campo e distribuição de recursos melhorando atendimento e nível de serviço de instalação e reparo de conectividade.

# Documentação

Os arquivos da documentação deste projeto estão na pasta [/artefatos](/artefatos).

# Artigo

Os arquivos do artigo estão na pasta [/artefatos](/artefatos). 

O conteúdo deste artigo foi elaborado como parte das atividades de aprendizado dos alunos, mas precisa ser revisto e modificado caso haja a intenção de submetê-lo para uma eventual publicação.

# Configuração para desenvolvimento

## Pré-requisitos para rodar a aplicação
### Node.js e npm
Necessários para rodar comandos npm i e npm start. Node.js é um ambiente de execução JavaScript do lado do servidor e npm é o seu gerenciador de pacotes.
### Python 3.8
Necessário para rodar os scripts em python presentes no backend
### JDK 1.8 e Maven
Necessários para compilar e executar os códigos em java

## Etapas para inicializar a aplicação
Para cada uma das etapas citadas, o usuário deve abrir um novo terminal na pasta principal da aplicação e enviar os comandos mencionados, ignorando a parte em itálico, que é meramente explicativa.
### Backend
cd ./codigo/backend *- abre a pasta backend*<br>
npm i *- instala as bibliotecas necessárias para a execução do backend. Somente necessário na primeira vez*<br>
npm start *- inicializa de fato o backend*<br>

### Microsserviço de pré-processamento
cd ./codigo/backend/preDataPSO_microservice/microService *- abre a pasta microService.*<br>
pip install -r requirements.txt *- instala as bibliotecas necessárias para a execução do pré-processamento. Somente necessário na primeira vez.*<br>
py preDataPSO_microservice.py *- inicializa de fato o microsserviço de pré-processamento.*<br>

### Algoritmo PSO
cd ./codigo/planejador/consiulium *- abre a pasta consiulium.*<br>
mvn compile *- compila o projeto Maven. Somente necessário na primeira vez.*<br>
mvn spring-boot:run *- inicializa de fato o microsserviço do algoritmo de PSO.*<br>

### Algoritmo Simplex
cd ./codigo/backend/simplex_microservice *- abre a pasta simplex_microservice.*<br>
pip install -r requirements.txt *- instala as bibliotecas necessárias para a execução do Simplex. Somente necessário na primeira vez.*<br>
py simplex.py *- inicializa de fato o microsserviço do Simplex.*<br>

### Frontend
cd ./codigo/frontend/carps *- abre a pasta carps.*<br>
npm i *- instala as bibliotecas necessárias para a execução do frontend. Somente necessário na primeira vez.*<br>
npm start *- inicializa de fato o frontend.*<br>

# Releases

* SPRINT1:
    - Entendimento do contexto do problema: modelagem e representação
    - Entendimento de Negócio
    - Entendimento da Experiência do Usuário

* SPRINT2:
    - Entendimento do contexto do problema (Refinamento)
    - Resolução de uma versão simplificada do problema
    - Artigo - versão inicial
    - Código de Ética

* SPRINT3:
    - Front-end da aplicação
    - Back-end da aplicação
    - Planejador
    - Artigo - 2a versão
    - Wireframe e Mockup
 
* SPRINT4:
    - Artigo - 3a versão
    - Complexidade do algorítmo
    - Corretude do allgorítmo
    - Aplicação - front-end e backend integrados 

* SPRINT5:
    - Ajustes finais no código
    - Artigo completo
    - Apresentação final
    - Testes de usabilidade

## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">

<a property="dct:title" rel="cc:attributionURL">Consilium</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName">Inteli, Bruno Wasserstein, Enya Oliveira Arruda, Gabriel Gallo Menequini Coutinho, Giuliano Bontempo Domiciano, Henrique Rodrigues de Godoy, Raab Iane Assunção Silva</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
