CREATE DATABASE Taverna;

USE Taverna;

CREATE TABLE tbUsuario 
	(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(100),
	apelido VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100)
    )
;

INSERT INTO tbUsuario VALUES
	(null, 'Victor Rubinec', 'VZRubinec', 'victor@gmail.com', '123456')
;
