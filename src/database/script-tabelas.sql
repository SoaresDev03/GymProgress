-- Active: 1742250764019@@127.0.0.1@3306@mysql
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
    descricao VARCHAR(350),
    );

CREATE TABLE alternativas(
    idAlternativa INT AUTO_INCREMENT,
    fkPergunta INT,
    resposta VARCHAR(80),
    correta TINYINT,
    Foreign Key (fkPergunta) REFERENCES Perguntas(idPergunta),
    PRIMARY KEY(idAlternativa, fkPergunta)
);


CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT,
    acertos INT,
    erros INT,
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

select * from usuario;
select * from resultado_quiz;
TRUNCATE table usuario;
TRUNCATE table resultado_quiz;

DROP DATABASE gymP;
CREATE DATABASE gymP;
USE gymP;


