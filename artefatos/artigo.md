---
title: Estratégias de Otimização para Distribuição Eficiente da Força de Campo - Estudo de Caso da V.tal
author: Bruno Wasserstein, Enya Oliveira Arruda, Gabriel Gallo Menequini Coutinho, Giuliano Bontempo Domiciano, Henrique Rodrigues de Godoy, Raab Iane Assunção Silva
date: Novembro a Dezembro de 2023
abstract: (Este artigo foi elaborado como parte de um exercício acadêmico, e precisa passar por uma revisão para ser utilizado em uma eventual publicação) O artigo propõe estratégias de otimização para a distribuição dos 6000 técnicos da V.tal em 2300 cidades, visando melhorar a eficiência operacional e a qualidade do serviço ao cliente. O estudo aborda algoritmos e modelagem para alcançar uma distribuição mais econômica e eficaz.
---

# Introdução

A V.tal, uma das principais empresas de conectividade do Brasil, enfrenta um desafio logístico significativo. Com uma força de campo composta por mais de 6000 técnicos - incluindo 1000 técnicos próprios e 5000 terceirizados - a empresa tem a tarefa de gerenciar instalações de conectividade em mais de 2300 cidades em todo o país.

Essa força de campo não apenas realiza instalações, mas também é responsável por reparos e manutenção, garantindo que os clientes da V.tal recebam um serviço de alta qualidade e confiabilidade.

Atualmente, a V.tal aplica uma estratégia setorial de disposição dos técnicos, embora fundamental para a organização básica das operações, pode não ser a mais eficiente em termos de otimização e eficácia operacional. A simples divisão de técnicos por setores pode não atender às necessidades dinâmicas e variáveis do trabalho, particularmente em um ambiente tão diversificado e geograficamente extenso. Ao adotar uma abordagem mais sofisticada e otimizada, é possível superar as limitações dessa estratégia setorial, melhorando tanto a eficiência quanto a eficácia da alocação de recursos.

Esta necessidade de otimização é apoiada por literatura relevante no campo. Estudos como o de AHRENS (2017) destacam como a gestão eficiente da força de campo afeta diretamente os custos operacionais e os níveis de serviço ao cliente, enquanto um trabalho realizado por JUNIOR, ROBLES e de FARIA (2005) associa uma gestão otimizada a melhorias na rentabilidade e na satisfação do cliente."

Este trabalho propõe a exploração de estratégias de otimização e modelagem para a distribuição eficaz da força de campo da V.tal. Serão analisadas abordagens baseadas em algoritmos de otimização, considerando dados geoespaciais e volumes de trabalho para alcançar uma distribuição mais eficiente e economicamente viável dos técnicos em diferentes localidades (ROCHA, 2011).

A otimização da distribuição da força de campo não apenas impacta os custos operacionais da empresa, mas também influencia diretamente a qualidade do serviço oferecido aos clientes. A abordagem inclui a coleta e análise de dados abrangentes, desenvolvimento de modelos de otimização personalizados, integração de análise geoespacial, simulações e ajustes iterativos, seguidos de validação e implementação prática. Este processo meticuloso visa não apenas melhorar a eficiência operacional, mas também oferecer uma solução adaptável e escalável para desafios logísticos semelhantes no setor de telecomunicações. Ao encontrar soluções mais eficazes e eficientes, este trabalho contribuirá para aprimorar a gestão logística da V.tal, resultando em um serviço mais ágil, redução de custos e satisfação aprimorada do cliente (TOMOYOSE, 2014).

Portanto, a questão de como otimizar a distribuição da força de campo da V.tal é de importância crítica, tanto para a saúde financeira da empresa quanto para a qualidade do serviço que ela oferece aos seus clientes.

# Trabalhos relacionados

## Agendamento inteligente: como resolver desafios de planejamento da força de trabalho com IA 
Este estudo explora a aplicação de inteligência artificial no agendamento de pessoal em centros de chamadas e operações de campo. (AMAR, J.et al., 2022) delinea uma abordagem onde algoritmos de IA são utilizados para otimizar turnos, levando em conta a distribuição geográfica das tarefas. 
Embora o estudo ofereça uma abordagem sofisticada para a alocação eficiente de recursos através de algoritmos de IA, sua aplicabilidade em nosso projeto é limitada devido à natureza altamente dinâmica e às variáveis específicas que enfrentamos. Em nosso contexto, as condições de trabalho e requisitos operacionais mudam frequentemente e de forma imprevisível, o que pode tornar os algoritmos de agendamento baseados em previsões estáticas menos eficazes. Estas mudanças frequentes exigem uma abordagem mais adaptável e capaz de responder rapidamente a alterações inesperadas, desafios estes não completamente abordados no modelo proposto pela McKinsey.

## Alocação Ótima de Recursos Humanos Baseada em Algoritmo de Otimização por Enxame de Partículas
Este artigo, apresentado por HANIZAD e MONTAZER(2019), investiga a otimização de recursos humanos em projetos, utilizando algoritmos de otimização por enxame de partículas. 
Embora seja promissora devido à sua natureza adaptativa e evolutiva, a aplicação desta abordagem na alocação de técnicos em telecomunicações enfrenta desafios específicos. Em nosso setor, as condições operacionais variam rapidamente devido a fatores como avanços tecnológicos, mudanças nas demandas dos clientes e flutuações nas condições de rede. Essas variáveis introduzem complexidades que requerem que os algoritmos sejam altamente flexíveis e capazes de se ajustar em tempo real a um ambiente em constante evolução. Portanto, para que a otimização por enxame de partículas seja efetiva em nosso contexto, são necessárias adaptações significativas para acomodar essas condições dinâmicas e imprevisíveis, assegurando que os técnicos sejam alocados de maneira eficiente mesmo diante de mudanças rápidas e frequentes.

## Um Modelo Inteligente para Alocação de Força de Trabalho Considerando Habilidades dos Operadores 
O estudo publicado no ScienceDirect(2021) destaca um modelo inovador que utiliza algoritmos inteligentes para a alocação de força de trabalho, priorizando as habilidades específicas dos operadores. Esta pesquisa é extremamente pertinente para nosso projeto, enfatizando a necessidade crítica de alinhar habilidades especializadas dos técnicos com as tarefas a eles atribuídas. A abordagem sugerida pelo estudo oferece insights valiosos sobre como otimizar a eficiência operacional, garantindo que cada tarefa seja designada ao técnico mais qualificado, um aspecto fundamental para a eficácia da nossa equipe no campo da telecomunicação.

## Um Problema Integrado de Agendamento de Máquinas e Alocação de Pessoal 
A pesquisa conduzida por Santos, Fukasawa e Ricardez(2020) oferece uma visão integrada e inovadora ao abordar de forma simultânea os desafios de agendamento de máquinas e alocação de pessoal. Esta abordagem holística, que busca a otimização de recursos tanto humanos quanto materiais, apresenta um potencial significativo para ser adaptada ao contexto do nosso projeto. Ao considerarmos a sincronização entre a disponibilidade de equipamentos e a eficiente alocação de recursos humanos, podemos aplicar esses princípios para melhorar a manutenção de redes de telecomunicações. Esta adaptação nos permitirá enfrentar os desafios específicos do nosso setor, integrando de maneira mais eficiente a gestão de máquinas e pessoal.

## Planejamento e Configuração de Recursos Humanos Baseados em Aprendizado de Máquina 
O artigo publicado pela Hindawi(2022) investiga a aplicação de algoritmos de aprendizado de máquina na previsão das necessidades de recursos humanos e na adaptação dinâmica da alocação de pessoal. Esta pesquisa representa um avanço significativo na gestão de recursos, oferecendo métodos inovadores para antecipar e responder às demandas de pessoal. No entanto, a eficácia dessa abordagem está condicionada à disponibilidade de um conjunto robusto de dados históricos, precisos e abrangentes. Essa exigência apresenta um desafio particular para a implementação no nosso projeto, dada a possível limitação na coleta e no acesso a dados históricos detalhados e consistentes, que são essenciais para alimentar e refinar esses algoritmos de aprendizado de máquina.


# Descrição dos algoritmos adotados para resolver o problema

No contexto do projeto de alocação de técnicos para manutenção de fibra ótica, foi empregado um algoritmo para atingir a solução desejada. A técnica utilizada é o Particle Swarm Optimization (PSO), um algoritmo inspirado na inteligência coletiva observada em grupos de animais, como bandos de pássaros ou cardumes de peixes. O PSO é particularmente eficaz em problemas de otimização não linear, sendo caracterizado pela sua capacidade de explorar o espaço de soluções através da movimentação e interação de 'partículas'. Cada partícula representa uma possível solução para o problema, ajustando sua trajetória com base tanto em sua experiência individual quanto nas informações compartilhadas pelas demais partículas. Essa abordagem permite que o PSO identifique regiões promissoras no espaço de soluções, convergindo gradualmente para uma solução, na qual nem sempre é a solução ótima, mas um ótimo local descoberto pelas partículas.

Para a utilização deste algoritmo no problema proposto, nós processamos os dados dos técnicos e serviços, utilizando principalmente as informações de identificadores, setor (apenas do serviço), latitude e longitude, o qual utilizamos para descobrirmos o tempo de deslocamento entre os técnicos e serviços utilizando uma API em um dos microserviços presentes na solução. Possuindo estes tempos, nosso algoritmo utiliza o identificador, o setor do serviço e a matriz de tempos para instanciar várias possibilidades de distribuição dos técnicos nos setores com base na demanda.

O uso deste algoritmo no projeto permite uma abordagem robusta e eficiente para o desafio de alocação de técnicos de maneira que o PSO contribui com sua flexibilidade e capacidade de explorar amplamente o espaço de soluções. Assim, essa implementação possibilita a otimização da distribuição de técnicos em diferentes regiões, considerando uma série de variáveis complexas, como a quantidade de técnicos disponíveis, a demanda por serviços e as especificidades geográficas de cada setor.


# Resultados obtidos

No desenvolvimento do projeto de alocação de técnicos para manutenção de fibra ótica, os resultados obtidos a partir das simulações teóricas realizadas pela equipe de desenvolvimento demonstraram o potencial significativo do algoritmo Particle Swarm Optimization (PSO) na melhoria da eficiência operacional. Embora o algoritmo ainda não tenham sido testados em um ambiente real pela empresa, as simulações forneceram insights valiosos sobre o desempenho esperado e a viabilidade do projeto.

Com o PSO, as simulações revelaram uma capacidade notável do algoritmo em explorar o espaço de soluções de forma eficiente, identificando configurações de alocação que equilibram a oferta e demanda de técnicos em diferentes regiões. Especificamente, a estratégia de otimização baseada em população do PSO demonstrou ser eficaz na adaptação às complexidades e dinâmicas do problema, proporcionando soluções que potencialmente otimizam a cobertura dos serviços mantendo o custo operacional em cheque.

Além disso, os arquivos de dados, incluindo informações sobre técnicos, setores e serviços, foram fundamentais para alimentar os algoritmos com informações precisas e relevantes, aumentando a confiabilidade das simulações. Utilizando-se de alguns dados criados/simplificados para testar a capacidade do algoritmo em comparação ao Simplex, fizemos alguns testes de benchmark.

No primeiro teste, utilizamos 369 serviços e 126 técnicos, fazendo com que o PSO seja executado em 42.3 segundos e retornando um índice HG (habilidade de gestão) de 0.207, demorando menos do que o Simplex (118.3 segundos) e possuindo um índice HG menor (2.279, quanto maior o índice, melhor a solução), tendência também observada nos outros testes. Com isso, o Simplex parece ser um algoritmo melhor adaptado o problema, contudo, a diferença no índice HG pode ser explicada pelo uso de uma simplificação da nossa função objetivo inicial no algoritmo Simplex, pois ela foi linearizada para poder ser resolvida pelo Simplex, além de que o índice HG retorna um valor com base no resultado esperado da função objetivo, tal que o PSO continua sendo executado mais rapidamente.

Em suma, os resultados das simulações teóricas indicam uma direção promissora para a aplicação prática desse algoritmo no contexto real da empresa. Ele oferece uma base sólida para futuros testes e implementações, sinalizando o potencial para uma alocação mais eficiente dos técnicos, melhor gestão dos recursos e, consequentemente, um aumento na satisfação do cliente e eficiência operacional.

# Conclusão

Com base no que foi descrito nas seções anteriores e os resultados obtidos com os testes feitos, é evidente que a solução não automatizará completamente o processo de atribuição de técnicos em serviços e setores por ser um problema altamente complexo e demandar uma capacidade de processamento alta para o volume de dados utilizados, contudo, a solução auxilia no processo de decisão feito pelos operadores diariamente, com uma interface de comunicação simples de ser utilizada e métodos visuais para entender as mudanças propostas.

Desta maneira, a utilização do sistema desenvolvido na solução mantém-se como uma ferramenta de consulta para os operadores, gerando um ganho no tempo de decisão e possibilidades de organização com base em lógica programável. Dado o que está sendo entregue ao final do projeto, existem algumas possibilidades de continuação do que podem ser sumarizadas em:

- *Mudanças na função objetivo:* ela determina o que é uma resposta preferível e como utilizamos uma modelagem mais simplificada do que o caso real, estas mudanças podem mudar drasticamente a solução proposta, mas especializando-se mais ao que é necessário.

- *Realizar testes com um volume maior de dados:* os testes foram realizados com os dados fornecidos simplificados para representar um dia do histórico fornecido e dados criados com resultados esperados, limitando o número de testes, assim, a análise com mais dados pode trazer de maneira mais concreta  percepções de pontos bons e pontos de melhora da modelagem.

- *Mudar a abordagem de alocar os técnicos em setores para alocá-los em serviços:* a alocação em setores faz sentido como uma estimativa da distância máxima percorrida por um técnico e sua área de atuação, contudo, transformar a saida do programa de alocação em setores para alocação em serviços facilitaria a atribuição e o entendimento do que está sendo proposto pelo algoritmo, melhorando seu funcionamento.

- *Adição de outras modelagens e algoritmos de inteligência artificial para a consulta:* atualmente, existem casos de utilização de sistemas de intêligencia artificial (principalmente as com reinforcement learning) para a solução de problemas de otimização, mostrando-se uma adição viável alinhada a proposta da solução e possivelmente fornecendo um resultado mais otimizado.

# Referências Bibliográficas

AHRENS, R. B. Capítulo XVIII: "Avaliação da Qualidade dos Serviços de Suporte de TI em uma IFES: Uma Abordagem Voltada à Mensuração de Desempenho". In: **A Gestão Estratégica na Administração - Vol. 2**. Ponta Grossa: Atena, 2017. E-book. ISBN 9788593243462. Disponível em: https://www.atenaeditora.com.br/catalogo/download-file/1841. Acesso em: 09 nov. 2023.

AMAR, J.; RAHIMI, S.; BISMARK, N.; WUNNAVA, A. **Smart scheduling: How to solve workforce-planning challenges with AI**. Operations Practice, 2022. Disponível em: https://www.mckinsey.com/capabilities/operations/our-insights/smart-scheduling-how-to-solve-workforce-planning-challenges-with-ai#/. Acesso em: 17 de nov. de 2023.

KHANIZAD, R.; MONTAZER, G. **Optimal allocation of human resources based on particle swarm optimization algorithm**. Tandfonline.com, 2019. Disponível em: https://www.tandfonline.com/doi/full/10.1080/23311916.2018.1466382. Acesso em: 17 de nov. de 2023.

ROBLES JUNIOR, A.; ROBLES, L. T.; DE FARIA, A. C. **Custos para servir: Abordagem da rentabilidade por clientes com base nos custos logísticos de distribuição**. In: IX Congresso Internacional de Custos, Florianópolis, SC, Brasil, 28 a 30 de novembro de 2005. Disponível em: https://anaiscbc.emnuvens.com.br/anais/article/download/1972/1972/1972. Acesso em: 09 nov. 2023.

ROCHA, Í. M. **Uma abordagem otimizada para o problema de alocação de equipes e escalonamento de tarefas para a obtenção de cronogramas eficientes**. Dissertação (Mestrado em Ciência da Computação) - Universidade Estadual do Ceará, Centro de Ciências e Tecnologia, Fortaleza, 2011. Disponível em: https://www.uece.br/wp-content/uploads/sites/51/2020/02/%C3%8DTALO-MENDON%C3%87A-ROCHA.pdf. Acesso em: 9 nov. 2023.

TOMOYOSE, F. H. **A influência do nível de serviço logístico na satisfação do cliente: um estudo em montadora do setor automobilístico**. Dissertação (Mestrado em Administração) - Universidade Municipal de São Caetano do Sul, Programa de Pós-Graduação em Administração, 2014. Disponível em: https://www.uscs.edu.br/pos-stricto-sensu/arquivo/540. Acesso em: 9 de nov. de 2023.

SANTOS, F.; FUKASAWA, R.; RICARDEZ-SANDOVAL, L. **An integrated machine scheduling and personnel allocation problem for large-scale industrial facilities using a rolling horizon framework**. Springer, 2020. Disponível em: https://link.springer.com/article/10.1007/s11081-020-09542-7. Acesso em: 17 de nov. de 2023.
