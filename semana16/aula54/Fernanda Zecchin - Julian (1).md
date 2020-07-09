# Fernanda Zecchin - Julian 

 1. **a**)No contexto dos banco de dados, o conceito de chave estrangeira ou chave externa se refere ao tipo de relacionamento entre distintas tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento entre duas tabelas.
 
   **b**)  INSERT INTO Rating (id, comment, rate, movie_id)
  VALUES (
    "001",
    "Muito bom!",
    7,
    "004"
  );

  **c**)Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'
  **d**) ALTER TABLE Movie DROP COLUMN rating;
  
  2. **a**)  Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.
  
3. **a**) Os valores pertencentes às colunas das tabelas associadas podem ser comparados entre si por meio de um operador lógico definido pela cláusula JOIN e usada pelo operador ON, como o sinal de igual (=).



