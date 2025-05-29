 1742250764019@@127.0.0.1@3306@mysql
use gymP;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    genero varchar(20)
);

CREATE TABLE perguntas(
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(350)
    );


INSERT INTO perguntas (descricao) VALUES
("Qual é o músculo mais forte do corpo humano em relação ao seu tamanho?"),
("Qual é o principal músculo trabalhado no exercício supino reto?"),
("Qual desses exercícios é considerado um dos melhores para desenvolver as costas?"),
("Quantos grupos musculares principais existem no corpo humano?"),
("Qual é o tempo ideal de descanso entre séries para hipertrofia muscular?"),
("Qual desses nutrientes é mais importante para a recuperação muscular pós-treino?"),
("Qual é o principal músculo trabalhado no agachamento?"),
("O que significa a sigla 'RM' na musculação?"),
("Qual desses exercícios é considerado um dos melhores para desenvolver os ombros?"),
("Qual é a função principal do músculo abdominal?");



CREATE TABLE alternativas(
    idAlternativa INT AUTO_INCREMENT,
    fkPergunta INT,
    resposta VARCHAR(80),
    correta TINYINT,
    Foreign Key (fkPergunta) REFERENCES Perguntas(idPergunta),
    PRIMARY KEY(idAlternativa, fkPergunta)
);



INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(1, 'Bíceps', 0),
(1, 'Quadríceps', 0),
(1, 'Masseter (mandíbula)', 1),
(1, 'Glúteo máximo', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(2, 'Dorsais', 0),
(2, 'Peitoral maior', 1),
(2, 'Deltóides', 0),
(2, 'Tríceps', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(3, 'Leg Press', 0),
(3, 'Barra fixa', 1),
(3, 'Elevação lateral', 0),
(3, 'Rosca direta', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(4, '5', 0),
(4, '8', 0),
(4, '11', 1),
(4, '14', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(5, '15-30 segundos', 0),
(5, '30-60 segundos', 0),
(5, '60-90 segundos', 1),
(5, '90-120 segundos', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(6, 'Carboidratos', 0),
(6, 'Proteínas', 1),
(6, 'Gorduras', 0),
(6, 'Vitaminas', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(7, 'Panturrilhas', 0),
(7, 'Quadríceps e glúteos', 1),
(7, 'Abdominais', 0),
(7, 'Ombros', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(8, 'Repetições Máximas', 1),
(8, 'Resistência Muscular', 0),
(8, 'Repouso Mínimo', 0),
(8, 'Rotina Mensal', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(9, 'Desenvolvimento com halteres', 1),
(9, 'Rosca martelo', 0),
(9, 'Extensão de tríceps', 0),
(9, 'Cadeira extensora', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(10, 'Flexão do tronco', 1),
(10, 'Extensão das pernas', 0),
(10, 'Rotação dos ombros', 0),
(10, 'Flexão dos braços', 0);


CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT,
    acertos INT,
    erros INT,
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

    SELECT p.idPergunta, p.descricao AS pergunta, a.idAlternativa, a.resposta, a.correta
        FROM (
            SELECT idPergunta, descricao
            FROM perguntas
            ORDER BY RAND()
            LIMIT 10
        ) AS p
        JOIN alternativas a ON a.fkPergunta = p.idPergunta
        ORDER BY p.idPergunta, a.idAlternativa;

select * from usuario;
select * from resultado_quiz;
TRUNCATE table usuario;
TRUNCATE table resultado_quiz;

DROP DATABASE gymP;
CREATE DATABASE gymP;
USE gymP;


