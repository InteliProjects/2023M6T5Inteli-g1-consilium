import { useState } from 'react';

/**
 * Componente que representa um quadrado de seleção de algoritmo.
 * 
 * @component
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {Function} props.proximoFrame - Função para avançar para o próximo frame.
 * @param {Function} props.setRotaAlgoritmo - Função para definir a rota do algoritmo escolhido.
 * @param {String} props.nomeDaClasse - Classe CSS para estilização do componente.
 */
const QuadradoDeAlgoritmo = (props) => {
    /**
     * Manipulador para a escolha do algoritmo.
     * Avança para o próximo frame e define a rota do algoritmo escolhido.
     * 
     * @param {String} rota - A rota do algoritmo escolhido.
     */
    const handleAlgorithmChoice = (rota) => {
        props.proximoFrame();
        props.setRotaAlgoritmo(rota);
    };

    // Estilos para os botões.
    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'cornflowerBlue',
        color: 'white',
        boxShadow: '0 2px 3px rgba(0,0,0,0.2)',
        margin: '20px',
        cursor: 'pointer',
        width: '100px'
    };

    return (
        <div id="divCentral" className={props.nomeDaClasse} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
            height: '70%',
            border: "0.1rem solid #E0E0E0",
            borderRadius: "1rem",
            backgroundColor: "#F0F0F0",
            gap: "20px"
        }}>
            <h2 style={{ marginTop: '10px', marginBottom: '0' }}>Escolha o algoritmo de otimização</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                marginTop: '0',
                marginBottom: '10px'
            }}>
                <button onClick={() => handleAlgorithmChoice('pso')} style={buttonStyle}>PSO</button>
                <button onClick={() => handleAlgorithmChoice('simplex')} style={buttonStyle}>Simplex</button>
            </div>
        </div>
    );
}

export default QuadradoDeAlgoritmo;
