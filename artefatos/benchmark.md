# Benchmark

## Comparação entre PSO (Particle Swarm Optimization) x Simplex

Este benchmark compara o desempenho entre os algoritmos PSO (Particle Swarm Optimization) e Simplex utilizando conjuntos de dados de pedidos e técnicos disponíveis em codigo/dados/dadosBenchmark/.

### Tempo de processamento (segundos)

|                | PSO  |   Simplex   |
| -------------- | :------: | :------: | 
| dadosBenchmark1 | 42.3s | 118.3s |
| dadosBenchmark2 | 13.6s | 64.3s |
| dadosBenchmark3 | 32.7s | 96.8s | 

Com base nos resultados destes testes, observa-se que, em média, o algoritmo Simplex demonstra ser mais eficiente em termos de tempo de processamento em comparação com o PSO. Essa diferença no tempo de execução pode ser particularmente significativa em conjuntos de dados volumosos, como o dadosBenchmark1.

### Solução (HG Index)

Dado que o Índice HG é uma métrica de competência gerencial que avalia a qualidade de uma solução, sua expressão matemática é fornecida pela seguinte fórmula:

$$
HG = \frac{8 \cdot f^2}{\sum_{i = 1}^{f} \sum_{j = 1}^{n} x_{ij} \cdot \frac{\sum_{k \in p_{j}} (t_{ik}+2)}{\sum_{k \in p_{j}}^{}x_{ij}} \cdot (\sum_{i=0}^{n} p_{i} - \sum_{j=0}^{f} p_{ij})}
$$

|                | PSO  |   Simplex   |
| -------------- | :------: | :------: | 
| dadosBenchmark1 | 0.193 | 2.279 |
| dadosBenchmark2 | 0.386 | 1.798 |
| dadosBenchmark3 | 0.189 | 2.71 | 

Os valores do índice HG indicam que as soluções produzidas pelo algoritmo Simplex nos benchmarks são de qualidade superior em comparação com as soluções obtidas pelo algoritmo PSO (Particle Swarm Optimization).
