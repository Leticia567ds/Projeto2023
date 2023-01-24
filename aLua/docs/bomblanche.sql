DROP DATABASE IF EXISTS bomblanches;
CREATE DATABASE bomblanches charset=UTF8 collate utf8_general_ci;
USE bomblanches;

CREATE TABLE entregadores(
    id_entregador integer not null primary key auto_increment,
    nome varchar(50) not null unique,
    email varchar(70) not null unique,
    senha varchar(20) not null,
    veiculo varchar(20) not null
);

CREATE TABLE pedidos(
    id_pedido integer not null primary key auto_increment,
    cliente varchar(80) not null,
    endereco varchar(170) not null,
    produto varchar(140) not null,
    datas DATETIME not null,
    hora_pedido TIME not null,
    hora_entrega TIME not null,
    hora_fim TIME not null,
    id_entregador integer not null,
    FOREIGN KEY (id_entregador) REFERENCES entregadores(id_entregador)
);

describe entregadores;
describe pedidos;

show tables;

---------------------------
LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/Projetos23/aLua/docs/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from entregadores;
---------------------------
LOAD DATA INFILE 'C:/Users/Usuario 10/Desktop/Projetos23/aLua/docs/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from pedidos;