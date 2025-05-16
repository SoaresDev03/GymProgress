CREATE DATABASE gymP;

USE gymP;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
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
TRUNCATE table resultado_quiz;


 SELECT 
        u.nome,
        r.fk_usuario,
        r.acertos,
        r.erros,
        r.data_resposta
    FROM resultado_quiz as r
    join usuario as u on r.fk_usuario = u.idUsuario
    WHERE u.idUsuario = 1;