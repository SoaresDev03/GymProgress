-- Active: 1742234339979@@127.0.0.1@3306@gymp

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    genero varchar(20)
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


