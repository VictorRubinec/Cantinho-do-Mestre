    DROP DATABASE Taverna;
    CREATE DATABASE Taverna;

    USE Taverna;

    CREATE TABLE tbUsuario 
        (
        idUsuario INT PRIMARY KEY AUTO_INCREMENT,
        nomeUsuario VARCHAR(100),
        apelido VARCHAR(100),
        email VARCHAR(100),
        senha VARCHAR(100),
        bio VARCHAR(200),
        foto MEDIUMBLOB
        )
    ;

    INSERT INTO tbUsuario VALUES
        (null, 'Victor Rubinec', 'VZRubinec', 'victor@gmail.com', '123456', 'Gosto de mestrar no sistema de ordem e procuro players :D', ''),
        (null, 'Renato Almeida', 'Tato', 'renato@gmail.com', '123456', 'Gosto de criar histórias e matar meus players', '')
    ;

    CREATE TABLE tbArtigo
        (
        idArtigo INT PRIMARY KEY AUTO_INCREMENT,
        tituloArtigo VARCHAR(100),
        descricaoArtigo VARCHAR(300),
        textoArtigo VARCHAR(10000),
        tipoArtigo VARCHAR(100),
        capa LONGBLOB,
        fkUsuario int,
        FOREIGN KEY(fkUsuario) REFERENCES tbUsuario(idUsuario)
        )
    ;

    INSERT INTO tbArtigo
        (tituloArtigo, descricaoArtigo, textoArtigo, tipoArtigo, fkUsuario)
    VALUES
        ('Os espinhos da aurora escalate', 'campanha pronta do ordem', 'um rpg muito foda ai que matei geral', 'campanha-ordem', 2)
        
        ,
        ('Os espinhos da aurora escalate', 'campanha pronta do ordem', 'um rpg muito foda ai que matei geral', 'campanha-ded', 2)
    ;

    select distinct(tipoArtigo) as 'sistema', count(tipoArtigo) as 'qtd' from tbArtigo where fkUsuario = 1 group by tipoArtigo;
    SELECT * FROM tbUsuario WHERE idUsuario = 2;
    select tituloArtigo as 'nomeArtigo', tipoArtigo as 'tipoArtigo' from tbArtigo where fkUsuario = 2 and tipoArtigo like 'campanha%';