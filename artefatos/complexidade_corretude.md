# Complexidade e corretude do algoritmo

# Análise de Complexidade

O algoritmo implementa o Particle Swarm Optimization (PSO), um algoritmo de otimização inspirado no comportamento social de pássaros e cardumes de peixes. No contexto do algoritmo, a população é representada por partículas (técnicos) que exploram o espaço de soluções (alocação de técnicos em setores) em busca da melhor solução.

1. **Número de Iterações:**
   - O algoritmo executa um número fixo de iterações (`nIteracoes`). Isso significa que o número de iterações não muda, sendo uma operação constante.

2. **Operações Dentro das Iterações:**
   - Dentro de cada iteração, o algoritmo percorre todas as partículas na população e realiza operações como cálculos de função objetivo, comparações e atualizações de posição e velocidade. O número total de operações é proporcional ao tamanho da população (`populacaoTamanho`).

3. **Funções Específicas:**
   - As funções específicas, como a função objetivo (`funcaoObjetivo`) e o cálculo do índice HG (`indiceHG`), envolvem iterações sobre técnicos, setores e pedidos. A complexidade dessas funções é proporcional ao número de técnicos e setores.

4. **Inicialização da População:**
   - A inicialização da população envolve loops sobre técnicos, setores e pedidos, e é realizada uma vez no início do algoritmo. A complexidade dessa operação é proporcional ao tamanho da população inicial.

**Melhor e Pior Caso:**

1. **Melhor Caso:**
   - O melhor caso ocorre quando a primeira partícula avaliada atinge imediatamente a solução ótima global. Nesse cenário, o algoritmo termina após uma iteração.

2. **Pior Caso:**
   - O pior caso ocorre quando todas as partículas passam pelo número máximo de iterações (`nIteracoes`) sem convergir para a solução ótima. Nesse cenário, a complexidade é determinada pelo número de iterações multiplicado pelo tamanho da população.

**Observações Adicionais:**
- O uso de funções aleatórias (`Random`) para inicialização e atualização das partículas pode influenciar no desempenho do algoritmo, mas a análise acima não leva em consideração a complexidade dessas operações.
- A entrada de dados a partir da entrada padrão (teclado) e a exibição de resultados na saída padrão (console) não impactam significativamente a complexidade do algoritmo.

# Análise Matemática de Complexidade

### Inicialização da População:
```java
for (int i = 0; i < populacaoTamanho; i++) {
    for (int j = 0; j < nTecnicos; j++) {
        for (int k = 0; k < nSetores; k++) {
            for (int l = 0; l < nPedidos; l++) {
                // Operações de inicialização
            }
        }
    }
}
```
Complexidade: O(populacaoTamanho * nTecnicos * nSetores * nPedidos)
Número exato de operações: `populacaoTamanho * nTecnicos * nSetores * nPedidos`

### Loop Principal (Iterações do PSO):
```java
for (int iteracao = 0; iteracao < nIteracoes; iteracao++) {
    for (Particula p : populacao) {
        // Operações de avaliação e atualização
        for (int j = 0; j < nTecnicos; j++) {
            for (int k = 0; k < nSetores; k++) {
                for (int l = 0; l < nPedidos; l++) {
                    // Operações de avaliação
                }
                // Operações de atualização
            }
        }
    }
}
```
Complexidade: O(nIteracoes * populacaoTamanho * nTecnicos * nSetores * nPedidos)
Número exato de operações: `nIteracoes * populacaoTamanho * nTecnicos * nSetores * nPedidos`

### Função Objetivo (`funcaoObjetivo`):
```java
for (int i = 0; i < nTecnicos; i++) {
    for (int j = 0; j < nSetores; j++) {
        for (int k = 0; k < nPedidos; k++) {
            // Operações dentro da função objetivo
        }
    }
}
```
Complexidade: O(nTecnicos * nSetores * nPedidos)
Número exato de operações: `nTecnicos * nSetores * nPedidos`

### Índice HG (`indiceHG`):
```java
for (int i = 0; i < nTecnicos; i++) {
    for (int j = 0; j < nSetores; j++) {
        for (int k = 0; k < nPedidos; k++) {
            // Operações dentro do cálculo do índice HG
        }
    }
}
```
Complexidade: O(nTecnicos * nSetores * nPedidos)
Número exato de operações: `nTecnicos * nSetores * nPedidos`

### Atualização das Partículas:
```java
for (Particula p : populacao) {
    for (int j = 0; j < nTecnicos; j++) {
        for (int k = 0; k < nSetores; k++) {
            for (int l = 0; l < nPedidos; l++) {
                // Operações de atualização das partículas
            }
        }
    }
}
```
Complexidade: O(populacaoTamanho * nTecnicos * nSetores * nPedidos)
Número exato de operações: `populacaoTamanho * nTecnicos * nSetores * nPedidos`

A seguir, uma análise matemática da complexidade para o algoritmo PSO, considerando a notação adequada (O, Ω, Θ).

**Notação O (Big O):**

A notação O é utilizada para representar um limite superior assintótico. Vamos analisar a complexidade para o pior caso.

1. **Melhor Caso (O Notation):**
   - O melhor caso seria dominado pelas operações dentro das iterações e a inicialização da população.
   - Melhor Caso: O(P * (T * S + T * P_total + P_total))

2. **Pior Caso (O Notation):**
   - O pior caso é dominado pelo número de iterações e as operações dentro das iterações.
   - Pior Caso: O(nIteracoes * P * (T * S + T * P_total + P_total))

**Notação Ω (Omega):**

A notação Ω é utilizada para representar um limite inferior assintótico. Vamos analisar a complexidade para o melhor caso.

1. **Melhor Caso (Ω Notation):**
   - O melhor caso ocorreria se a primeira partícula atingisse imediatamente o valor ótimo global. Nesse caso, o algoritmo terminaria após uma iteração.
   - Melhor Caso: Ω(P * (T * S + T * P_total + P_total))

2. **Pior Caso (Ω Notation):**
   - O pior caso ocorreria se todas as partículas passassem pelo número máximo de iterações sem convergir para a solução ótima.
   - Pior Caso: Ω(nIteracoes * P * (T * S + T * P_total + P_total))

**Notação Θ (Theta):**

A notação Θ é utilizada quando a complexidade assintótica é igual tanto para o limite superior quanto para o limite inferior. Em casos práticos, os melhores e piores casos podem ser os mesmos.

1. **Melhor Caso (Θ Notation):**
   - Se o melhor caso e o pior caso têm a mesma complexidade (o que é possível neste contexto), então podemos usar Θ.
   - Melhor Caso: Θ(P * (T * S + T * P_total + P_total))

2. **Pior Caso (Θ Notation):**
   - Se o melhor caso e o pior caso têm a mesma complexidade (o que é possível neste contexto), então podemos usar Θ.
   - Pior Caso: Θ(nIteracoes * P * (T * S + T * P_total + P_total))

# Análise da corretude do algoritmo

A corretude é a propriedade que assegura que, para todas as entradas válidas, o algoritmo produzirá uma saída correta ou indicará corretamente a impossibilidade de solução. Esta propriedade garante a confiabilidade e a precisão dos programas e sistemas computacionais. A prova de corretude de um algoritmo envolve duas componentes principais: a corretude parcial, que afirma que se o algoritmo termina (ou seja, não entra em um ciclo infinito), então ele produz uma resposta correta; e a terminação, que garante que o algoritmo sempre chegará a um fim em um tempo finito. A combinação dessas duas propriedades assegura a corretude total do algoritmo. Provar a corretude geralmente envolve técnicas matemáticas rigorosas, como indução, invariante de laço e lógica formal, para demonstrar que o algoritmo cumpre com seu propósito especificado sob todas as condições de entrada previstas.
Para aplicar uma demonstração usando indução no invariante precisamos seguir um processo,três aspectos principais são considerados: Inicialização, manutenção e terminação e a pré condição que é a definição do invariante do laço.

## Invariante do laço principal

É necessário entender primeiro o significado de alguns dados usados no algoritmo para definirmos o a invariante laço principal, sendo eles: p - uma partícula no conjunto de partículas criadas, ela possui os atributos de posição no eixo x (posicaoX), posição no eixo y (posicaoY), velocidade nos dois eixos (velocidadeX e velocidadeY), sua melhor posição nos dois eixos (melhorPosicaoX e melhorPosicaoY) e seu melhor valor na função objetivo (melhorValor); melhorValorGlobal - variável que armazena o melhor valor da função objetivo encontrado pelas partículas.

Com isso invariante do laço principal é que $melhorValorGlobal \leq p.melhorValor \ \forall \ p \in P$ (conjunto de todas as partículas).

**Prova por indução:**

1. **Caso base**: inicialmente, melhorValorGlobal assume o valor de Double.MAX_VALUE, a medida que o laço verifica a posição inicial dos pontos, como descrito no código abaixo:
```java
for (int iteracao = 0; iteracao < nIteracoes; iteracao++) {
            // Loop sobre cada partícula na população
    for (Particula p : populacao) {
        double valorAtual = funcaoObjetivo(p.posicaoX, p.posicaoY, tempoPedidos, pedidos, 1, 1);

        if (valorAtual < p.melhorValor) {
            p.melhorValor = valorAtual;
            System.arraycopy(p.posicaoX, 0, p.melhorPosicaoX, 0, (int) nTecnicos);
            System.arraycopy(p.posicaoY, 0, p.melhorPosicaoY, 0, (int) nTecnicos);
        }

        if (valorAtual < melhorValorGlobal) {
            melhorValorGlobal = valorAtual;

            for (int i = 0; i < nTecnicos; i++) {
                for (int j = 0; j < nSetores; j++) {
                    melhorPosicaoGlobalX[i][j] = p.posicaoX[i][j];
                    for (int k = 0; k < nPedidos; k++) {
                        melhorPosicaoGlobalY[i][k] = p.posicaoY[i][k];
                    }
                }
            }
        }
        //...
    }
}
```
     O valor de melhorValorGlobal é atualizado para o menor valor encontrado por um ponto na função objetivo, assim, o valor de melhorValorGlobal igual ao da partícula que teve o melhor valor e é menor do que o valor encontrado pleas outras partículas.

2. **Hipótese**: suponhamos que na k-ésima iteração do laço, a invariante do laço seja verdadeira, ou seja, o melhorValorGlobal é igual ao menor valor da função objetivo descoberto pelas partículas, sendo igual ao valor de um p.melhorValor e menor do que a do restante das patículas.

## Análise de corretude

Analisando os três aspectos necessários para a corretude:

1. **Inicialiação**: Na fase de inicialização da análise de corretude de um algoritmo, é crucial demonstrar que a invariante de laço é verdadeira antes da primeira execução do laço. No caso específico do nosso algoritmo, essa etapa envolve estabelecer melhorValorGlobal com um valor inicial que garanta a veracidade da invariante desde o início. Por exemplo, ao inicializar melhorValorGlobal com Double.MAX_VALUE, o maior valor possível para um double em Java, garantimos que, antes de qualquer processamento, este valor é, por definição, maior ou igual ao melhorValor de qualquer partícula na população. Essa escolha estratégica não apenas assegura que a invariante é verdadeira antes do laço começar, mas também estabelece uma base sólida para a fase de manutenção subsequente. Tal inicialização é essencial para a corretude global do algoritmo, pois cria um ponto de partida confiável a partir do qual podemos avaliar a evolução do melhorValorGlobal em comparação com os valores obtidos pelas partículas, garantindo assim que o algoritmo funciona corretamente desde o início.

2. **Manutenção**: Na fase de manutenção da análise de corretude de um algoritmo, focamos em demonstrar como a invariante estabelecida na fase de inicialização permanece verdadeira ao longo de cada iteração do laço. Essencialmente, nesta etapa, examinamos as operações realizadas dentro de cada iteração do laço e avaliamos seu impacto na invariante. No contexto específico do nosso algoritmo, isso envolve observar como melhorValorGlobal e p.melhorValor são atualizados. Por exemplo, se em uma dada iteração, um valor de função objetivo calculado para uma partícula é menor do que o melhorValorGlobal atual, então melhorValorGlobal é atualizado para este novo valor mínimo. Esta atualização é crucial, pois garante que a invariante - melhorValorGlobal sendo sempre menor ou igual ao melhorValor de cada partícula - continue válida. Ao detalhar cuidadosamente esse processo, mostramos que, independentemente das mudanças realizadas em cada iteração, a condição estabelecida inicialmente é mantida, assegurando que o algoritmo progride de maneira correta e consistente em direção ao seu objetivo final. Para provar a manutenção da invariável realizamos a indução:

        Indução: Durante a (k+1)-ésima iteração do nosso algoritmo, descobrimos que uma partícula denominada $p_x$, apresenta o menor valor da função objetivo encontrado até o momento. Conforme o funcionamento do algoritmo descrito no caso base, se o valorAtual calculado para $p_x$ for menor que o melhorValorGlobal atual, então melhorValorGlobal é atualizado para corresponder a este novo valor mínimo encontrado.
        Este mecanismo de atualização é crucial, pois garante que melhorValorGlobal reflete sempre o menor valor obtido pelas partículas até aquele ponto do processo. Mais importante, após a atualização, melhorValorGlobal não será aumentado por quaisquer valores subsequentes de função objetivo calculados para outras partículas na mesma iteração, já que estes só podem ser iguais ou maiores que o valor mínimo já encontrado.
        Assim, ao final da (k+1)-ésima iteração, a invariante $melhorValorGlobal \leq p.melhorValor \ \forall \ p \in P$ permanece verdadeira. Isso ocorre porque melhorValorGlobal, agora atualizado, continua sendo menor ou igual ao melhor valor de cada partícula individual na população, reafirmando a validade contínua da invariante ao longo das iterações do laço.

Durante a fase de manutenção, além de considerar a atualização de melhorValorGlobal e p.melhorValor, é importante também levar em conta a dinâmica da força restritiva que age sobre as partículas. Esta força desempenha um papel crucial na manutenção da invariante do algoritmo. Se uma partícula se desloca para uma posição onde o resultado da função objetivo é maior do que seu valor anterior, a força restritiva atua para 'puxar' a partícula de volta para a sua melhor posição anteriormente encontrada, bem como em direção à posição correspondente ao melhorValorGlobal. Este mecanismo garante que, se uma partícula já estiver na melhor posição possível desde o início, ela será reconduzida a essa posição mesmo após explorar outras áreas. Consequentemente, essa dinâmica assegura que melhorValorGlobal e p.melhorValor sejam atualizados de maneira a manter a invariante verdadeira. Mesmo que uma partícula temporariamente explore uma posição com um valor mais alto, a força restritiva a direciona de volta para uma posição de valor mínimo, seja seu melhor valor pessoal ou o melhor valor global. Essa estratégia contribui significativamente para a eficácia do algoritmo em encontrar e manter os melhores valores possíveis ao longo das iterações, reforçando a invariante que estabelecemos.

3. **Terminação**: Na fase de terminação, analisamos o estado do algoritmo após a conclusão do laço para confirmar que ele atingiu seu objetivo de maneira correta. No nosso caso, isso significa verificar se, ao final das iterações definidas pelo número nIteracoes, melhorValorGlobal representa efetivamente o menor valor de função objetivo encontrado entre todas as partículas na população. A terminação ocorre quando todas as partículas foram avaliadas pelo número estipulado de iterações, garantindo que o espaço de busca foi adequadamente explorado. Durante cada iteração, conforme demonstrado pela manutenção da invariante, melhorValorGlobal é atualizado para refletir o menor valor encontrado, assegurando que ao final do processo, ele contém o valor ótimo ou mais próximo do ótimo possível dentro do contexto do problema. Assim, a conclusão do laço não é apenas uma questão de atingir o limite de iterações, mas também um indicativo de que o algoritmo realizou sua tarefa conforme esperado, encontrando o resultado mais eficiente conforme definido pela função objetivo.