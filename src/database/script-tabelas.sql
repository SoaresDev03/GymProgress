CREATE DATABASE gymP;
use gymP;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    genero varchar(20)
);

create table quiz(
    idQuiz int PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT,
    fk_quiz int,
    pontos INT,
    erros INT,
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fk_quiz) REFERENCES quiz(idQuiz)
);


CREATE TABLE perguntas(
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(350),
    fk_quiz int,
    FOREIGN KEY (fk_quiz) REFERENCES quiz (idQuiz)
    );

CREATE TABLE alternativas(
    idAlternativa INT AUTO_INCREMENT,
    fkPergunta INT,
    resposta VARCHAR(80),
    correta TINYINT,
    Foreign Key (fkPergunta) REFERENCES Perguntas(idPergunta),
    PRIMARY KEY(idAlternativa, fkPergunta)
);

INSERT INTO quiz (nome) values
("quiz geral musculação");


INSERT INTO perguntas (descricao,fk_quiz) VALUES
("Qual é o músculo mais forte do corpo humano em relação ao seu tamanho?",1),
("Qual é o principal músculo trabalhado no exercício supino reto?",1),
("Qual desses exercícios é considerado um dos melhores para desenvolver as costas?",1),
("Quantos grupos musculares principais existem no corpo humano?",1),
("Qual é o tempo ideal de descanso entre séries para hipertrofia muscular?",1),
("Qual desses nutrientes é mais importante para a recuperação muscular pós-treino?",1),
("Qual é o principal músculo trabalhado no agachamento?",1),
("O que significa a sigla 'RM' na musculação?",1),
("Qual desses exercícios é considerado um dos melhores para desenvolver os ombros?",1),
("Qual é a função principal do músculo abdominal?",1);

INSERT INTO perguntas (descricao) VALUES
("Qual hormônio é mais associado ao crescimento muscular?"),
("Qual desses exercícios trabalha mais intensamente o tríceps?"),
("Qual equipamento é mais comumente usado para exercícios cardiovasculares?"),
("Qual é o nome do processo de diminuição gradual da carga ao final do treino?"),
("Qual é a função da creatina no desempenho físico?");

INSERT INTO perguntas (descricao) VALUES
("Qual desses é um sinal comum de overtraining (excesso de treino)?"),
("Qual o principal músculo trabalhado no exercício levantamento terra?"),
("Qual é a recomendação geral de ingestão proteica diária para quem treina visando hipertrofia?"),
("Qual desses exercícios é mais indicado para trabalhar os glúteos?"),
("Qual é a principal função do músculo peitoral maior?");

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



INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(11, 'Insulina', 0),
(11, 'Testosterona', 1),
(11, 'Cortisol', 0),
(11, 'Estrogênio', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(12, 'Puxada alta', 0),
(12, 'Rosca direta', 0),
(12, 'Paralela (mergulho)', 1),
(12, 'Agachamento livre', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(13, 'Máquina Smith', 0),
(13, 'Esteira', 1),
(13, 'Leg Press', 0),
(13, 'Crossover', 0);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(14, 'Supersérie', 0),
(14, 'Dropset', 0),
(14, 'Alongamento', 0),
(14, 'Desaquecimento (cooldown)', 1);


INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(15, 'Aumentar os estoques de glicose', 0),
(15, 'Melhorar a flexibilidade', 0),
(15, 'Aumentar a força e explosão muscular', 1),
(15, 'Reduzir a pressão arterial', 0);

INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(16, 'Aumento de força e energia', 0),
(16, 'Melhora na qualidade do sono', 0),
(16, 'Diminuição de rendimento e fadiga constante', 1),
(16, 'Aumento do apetite', 0);

INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(17, 'Bíceps braquial', 0),
(17, 'Tríceps sural', 0),
(17, 'Eretor da espinha e posteriores da coxa', 1),
(17, 'Deltóide anterior', 0);

INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(18, '0,5g por kg de peso corporal', 0),
(18, '1,0g por kg de peso corporal', 0),
(18, '1,6g a 2,2g por kg de peso corporal', 1),
(18, '3,0g por kg de peso corporal', 0);

INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(19, 'Rosca direta', 0),
(19, 'Cadeira extensora', 0),
(19, 'Afundo (passada)', 1),
(19, 'Desenvolvimento militar', 0);

INSERT INTO alternativas (fkPergunta, resposta, correta) VALUES
(20, 'Flexionar o cotovelo', 0),
(20, 'Estabilizar o quadril', 0),
(20, 'Adotar postura ereta', 0),
(20, 'Adução e rotação interna do braço', 1);

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

describe perguntas;
describe alternativas;
describe resultado_quiz;

DROP DATABASE gymP;
CREATE DATABASE gymP;
USE gymP;

 SELECT 
            usuario.idUsuario AS jogador_id, 
            usuario.nome AS nome_jogador, 
            MAX(r.pontos) AS pontos
        FROM resultado_quiz as r
        JOIN usuario ON r.fk_usuario = usuario.idUsuario
        GROUP BY usuario.idUsuario, usuario.nome
        ORDER BY pontos DESC
        LIMIT 10;


     SELECT 
        u.nome,
        COALESCE(SUM(r.pontos), 0) AS total_acertos
        FROM usuario u
        LEFT JOIN resultado_quiz r ON u.idUsuario = r.fk_usuario
        GROUP BY u.idUsuario
        ORDER BY total_acertos DESC
        LIMIT 3;

    -- inserts para teste
    INSERT INTO usuario (nome, email, senha, genero) VALUES 
('Ana Souza', 'ana.souza@email.com', 'senha!23', 'Feminino'),
('Bruno Lima', 'bruno.lima@email.com', 'senha!23', 'Masculino'),
('Carla Mendes', 'carla.mendes@email.com', 'senha!23', 'Feminino'),
('Diego Rocha', 'diego.rocha@email.com', 'senha!23', 'Masculino'),
('Eduarda Silva', 'eduarda.silva@email.com', 'senha!23', 'Feminino'),
('Felipe Torres', 'felipe.torres@email.com', 'senha!23', 'Masculino'),
('Gabriela Costa', 'gabriela.costa@email.com', 'senha!23', 'Feminino'),
('Henrique Almeida', 'henrique.almeida@email.com', 'senha!23', 'Masculino'),
('Isabela Martins', 'isabela.martins@email.com', 'senha!23', 'Feminino'),
('João Pedro', 'joao.pedro@email.com', 'senha!23', 'Masculino');

INSERT INTO resultado_quiz (pontos, erros, data_resposta, fk_usuario) VALUES 
(8, 2, '2024-05-10 14:30:00', 1),
(10, 0, '2024-05-12 09:15:00', 1),

(6, 4, '2024-05-11 10:20:00', 2),
(9, 1, '2024-05-13 11:00:00', 2),

(7, 3, '2024-05-10 16:45:00', 3),
(8, 2, '2024-05-14 13:10:00', 3),

(10, 0, '2024-05-09 12:00:00', 4),
(10, 0, '2024-05-15 15:30:00', 4),

(5, 5, '2024-05-08 10:00:00', 5),
(7, 3, '2024-05-12 14:45:00', 5),

(9, 1, '2024-05-07 13:15:00', 6),
(10, 0, '2024-05-13 16:20:00', 6),

(4, 6, '2024-05-06 11:30:00', 7),
(6, 4, '2024-05-11 12:30:00', 7),

(8, 2, '2024-05-10 10:10:00', 8),
(9, 1, '2024-05-14 14:00:00', 8),

(5, 5, '2024-05-12 09:00:00', 9),
(7, 3, '2024-05-15 17:40:00', 9),

(10, 0, '2024-05-09 18:20:00', 10),
(10, 0, '2024-05-13 08:45:00', 10);

