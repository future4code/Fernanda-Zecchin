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
**b**)SELECT  name, salary from Actor WHERE name = "Tony Ramos";
**c**)SELECT gender from Actor WHERE gender = "invalid", 0 resultado., gender.
**d**)SELECT id, name, salary from Actor WHERE salary  >= "500000";
**e**)SELECT id, name from Actor WHERE id = "002";, estava escrito como nome, não name. Erro 1054, 
nome da coluna desconhecida na lista de campos

**a**)  Retorna 2 resultados , as duas pessoas do sexo feminino.
**b**)

4. **a**)Os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". 
 **b**)SELECT * FROM Actor
WHERE  (name NOT LIKE "A%")  AND salary > 350000;
**c**)SELECT * FROM Actor
WHERE  (name  LIKE "G%" OR name LIKE "g&")  ;
**d**)SELECT * FROM Actor
WHERE  (name LIKE "%A%" OR name LIKE "%a%" AND name LIKE "%g%" OR name LIKE "%G%" ) AND salary BETWEEN 35000000 AND 90000000 ;

5. )_CREATE TABLE Movie (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  synopsis TEXT NOT NULL,
  release_Date DATE NOT NULL,
  rating INT NOT NULL
);

INSERT INTO Movie (id, title,synopsis,release_Date, rating)
VALUES(
 "001",
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
 "2006-01-06",
 7
),
(
"002",
"Doce de mãe",
"Sinopse: Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
(
 "003",
 "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
 "2017-02-11",
 8
),
(
"004",
"Cazuza",
"Biografia do cantor Cazuza",
"2004-04-11",
 8
);

SELECT * FROM Movie;

6. **a**)SELECT id, title, rating FROM Movie WHERE id = "001";
  **b**)SELECT * FROM Movie WHERE title = "Cazuza"; (erro 1054, name não existe e sim title)
  **c**)SELECT id, title, synopsis FROM Movie WHERE rating > 7; Retorna 3 filmes

 7  .**a**) SELECT title FROM Movie WHERE title = "vida"
  **b**)SELECT * FROM Movie WHERE title LIKE "%flor%" OR  synopsis LIKE "%cantor%";
  **c**)SELECT * FROM Movie WHERE  release_Date < "2020-07-06"
  **d**)SELECT * FROM Movie WHERE title LIKE "%eu%" OR synopsis LIKE "%professora%" AND  rating > 7;







