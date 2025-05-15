CREATE DATABASE gymP;

USE gymP;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE resultado_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT,
    acertos INT,
    erros INT,
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from usuario;
select * from resultado_quiz;
TRUNCATE table usuario;