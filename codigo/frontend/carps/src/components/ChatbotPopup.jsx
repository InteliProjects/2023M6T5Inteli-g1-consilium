import React, { useState } from 'react';
import '../styles/ChatbotPopup.css'; // Importação dos estilos CSS

// Importação das imagens do robô para diferentes estados
import robotHello from '../assets/robot-hello.png';
import robotCelebration from '../assets/robot-celebration.png';
import robotRight from '../assets/robot-right.png';
import robotLeft from '../assets/robot-left.png';
import robotWorried from '../assets/robot-worried.png';
import robotHappy from '../assets/robot-happy.png';

const ChatbotPopup = () => {
    // Estados para controlar a etapa atual, subetapa e imagem do robô
    const [etapa, setEtapa] = useState('inicio');
    const [subEtapa, setSubEtapa] = useState('');
    const [imagemRobo, setImagemRobo] = useState(robotHello);

    // Diálogos e opções para cada etapa do chatbot
    const dialogos = {
        inicio: {
            mensagem: "Olá! Bem-vindo ao sistema CARPS. Sou um assistente virtual e estou aqui para ajudá-lo. Por favor, escolha um tópico para começarmos a familiarização.",
            opcoes: [
                { texto: "Como o sistema funciona?", valor: "comoFunciona" },
                { texto: "Qual é o objetivo do sistema?", valor: "objetivoSistema" },
                { texto: "Gostaria do tutorial em vídeo", valor: "tutorialVideo" }
            ]
        },

        comoFunciona: {
            mensagem: "Ótima escolha! O sistema CARPS é projetado para ser intuitivo. O objetivo é que através do upload/carregamento de arquivos específicos, você obtenha os dados para otimização de alocação de técnicos de maneira estratégica, assertiva e o principal, acessível para todos",
            opcoes: [
                { texto: "Entendi, continuar", valor: "cadastro" }
            ]
        },

        objetivoSistema: {
            mensagem: "O objetivo do sistema CARPS é otimizar a alocação de técnicos de manutenção de fibra ótica. Utilizando algoritmos avançados, como PSO, o sistema analisa os dados fornecidos para determinar a melhor distribuição de técnicos por região. Isso visa maximizar a eficiência operacional, reduzir o tempo de resposta para manutenções e garantir uma cobertura abrangente e eficaz de serviços.",
            opcoes: [
                { texto: "Entendi, quais são os próximos passos?", valor: "comoFunciona" },
                { texto: "Voltar ao menu principal", valor: "inicio" }
            ]
        },        

        cadastro: {
            mensagem: "Primeiramente, você irá clicar no botão 'Cadastre-se agora' localizado no canto superior esquerdo.",
            opcoes: [
                { texto: "Próximo passo", valor: "voltarMenu" }
            ]
        },
        voltarMenu: {
            mensagem: "Após se cadastrar, você deverá voltar para o menu principal. No canto superior direito, clique no botão 'Voltar'.",
            opcoes: [
                { texto: "Próximo passo", valor: "uploadArquivos" }
            ]
        },
        uploadArquivos: {
            mensagem: "Após fazer o login, você será direcionado para a tela de upload de arquivos. A ordem e a correspondência de tipos de dados são cruciais. Podemos continuar?",
            opcoes: [
                { texto: "Tudo certo, pode continuar", valor: "processamentoDados" },
                { texto: "Estou meio perdido", valor: "linkVideo" },
                { texto: "Quais são os formatos de arquivos aceitos e qual a ordem para enviar?", valor: "formatosArquivos" }
            ]
        },
        processamentoDados: {
            mensagem: "Após enviar os arquivos, o sistema processará os dados. Este processo pode variar em tempo devido à intensidade de sinal de rede e à quantidade de dados. Você poderá visualizar os resultados graficamente e também exportá-los para maior comodidade.",
            opcoes: [
                { texto: "Entendi, encerrar tutorial", valor: "fim" }
            ]
        },
        
        fim: {
            mensagem: "Tutorial finalizado. Obrigado por usar o CARPS!",
            opcoes: []
        }
    };

    // Função para escolher uma opção e atualizar a etapa do chatbot
    const escolherOpcao = (opcao) => {
        if (opcao === "linkVideo") {
            window.open('https://www.canva.com/design/DAF2UByXBpQ/AbVRW4YKFL7KvZ8tLq8Htg/watch?utm_content=DAF2UByXBpQ&utm_campaign=designshare&utm_medium=link&utm_source=editor');
            setSubEtapa('');
            return;
        }
    
        switch (opcao) {
            case 'comoFunciona':
                setImagemRobo(robotCelebration);
                break;
            case 'cadastro':
                setImagemRobo(robotRight);
                break;
            case 'voltarMenu':
                setImagemRobo(robotLeft);
                break;
            case 'uploadArquivos':
                setImagemRobo(robotWorried);
                break;
            case 'processamentoDados':
                setImagemRobo(robotHappy);
                break;
            default:
                setImagemRobo(robotHello);
        }
    
        setEtapa(opcao);
    };

    // Renderização do chatbot com a imagem atual, mensagem e opções de botões
    return (
        <div className="chatbot-popup">
            <img src={imagemRobo} alt="Chatbot" />
            <p>{subEtapa || (dialogos[etapa] ? dialogos[etapa].mensagem : '')}</p>
            {dialogos[etapa] && dialogos[etapa].opcoes.map((opcao, index) => (
                <button key={index} onClick={() => escolherOpcao(opcao.valor)}>
                    {opcao.texto}
                </button>
            ))}
        </div>
    );
};

export default ChatbotPopup;