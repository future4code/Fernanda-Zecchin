## JULIAN_FERNANDA_ZECCHIN_DB

CREATE TABLE Actor (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  salary FLOAT NOT NULL,
  birth_date DATE NOT NULL,
  gender VARCHAR(6) NOT NULL
);

1.**a**)*VARCHAR*  é usado para caracteres, limitar a quantidade .
      *PRIMARY KEY*  é um identificador único
      *NOT NULL* não seja vazio 
      *CREATE TABLE* criar tabela 
      
  **b**)Retorna 2 informações e retorna o nome da tabela
  **c**) Tem que ser sem o SHOW, apenas o DESCRIBE Actor, aparece as informções da tabela.
  
  2.**a**) INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES("002", "Gloria Pires", "1200000", "1963-08-23", "female");

**b**) O id é um identificador único e não pode se repetir, (PRIMARY KEY), erro 1062, entrada duplicada.
**c**)A CONTA DA COLUNA NÃO CONCORDA COM VALOR contagem na linha, erro 1136, esta faltando os parametros de data de nascimento e genero.

**d**)Nome do campo não possui valor padrão, erro 1364, o valor não pode ser nulo, o name é um NOT NULL. 

**e**) Valor da data incorreto, erro 1292, é a falta de string.

**f**) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

**g**)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

3. **a**) SELECT * FROM Actor
WHERE gender != "male";	


**b**)




