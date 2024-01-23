from flask import Flask, request, jsonify
from scipy.optimize import linprog
import json
import numpy as np

app = Flask(__name__)

def hg_index(x, tempo_deslocamento, pedidos_setor):

    n_tecnicos = len(x)  # número de técnicos a serem alocados
    n_setores = len(x[0])  # número de setores
    
    sum_result = 0

    custo_termo1 = 0
    custo_termo2 = 0

    numerador = 0
    denominador = 0

    passo = 0

    for i in range(n_tecnicos):
        passo = 0
        numerador = 0
        denominador = 0

        for j in range(n_setores):
            for k in range(passo, passo + pedidos_setor[j]):
                numerador += x[i][j] * (tempo_deslocamento[i][k] + 2)/pedidos_setor[j]
                denominador += x[i][j]
            passo += pedidos_setor[j]

        if denominador == 0:
            return float('inf')

        custo_termo1 += numerador / denominador

    for i in range(n_setores): 

        custo_termo2Setor = 0

        for j in range(n_tecnicos):
            custo_termo2Setor += x[j][i]

        custo_termo2 += (pedidos_setor[i] - custo_termo2Setor)

    int_hg_index = (8 * n_tecnicos * n_tecnicos) / (custo_termo1 * custo_termo2)

    return int_hg_index

# Rota POST para o microserviço
@app.route('/simplex', methods=['POST'])
def calcular_distancias():
    try:
        # Recebendo os dados da requisição
        data = request.get_json()
        n = data.get('n')
        m = data.get('m')
        pedidos = data.get('pedidos')
        tempoPedidos = data.get('tempoPedidos')

        c = []
        aEq = []
        bEq = []

        for i in range(n):
            passo = 0

            for j in range(m):
                numerador = 0
                for k in range(passo, passo + int(pedidos[j])):
                    numerador += tempoPedidos[i][k] / int(pedidos[j])

                c.append(numerador)

        listas = []

        passo = 0
        for i in range(n):

            listaTemporaria = []

            for j in range(n*m):

                if (j >= passo*m) and (j < passo*m + m):
                    listaTemporaria.append(1)
                else:
                    listaTemporaria.append(0)
            
            passo += 1

            aEq.append(listaTemporaria)
            bEq.append(1)

        print(f'c: {c}')
        print(f'aEq: {aEq}')
        print(f'bEq: {bEq}')

        # # Limites das variáveis
        # x0_bounds = (0, None)
        # x1_bounds = (0, None)

        # Solução do problema de programação linear
        result = linprog(c, A_eq=aEq, b_eq=bEq, method='simplex')
        print(result)
        
        result = result.x.tolist()

        returnResult = []
        for i in range(n):
            returnResult.append(result[i*m:(i+1)*m])
            print(result[i*m:(i+1)*m])

        finalJson = {'finalList': returnResult, 'hgindex': hg_index(returnResult, tempoPedidos, pedidos)}

        # Retorna o resultado como JSON
        return json.dumps(finalJson)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
