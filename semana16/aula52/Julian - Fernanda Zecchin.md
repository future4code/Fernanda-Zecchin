# Julian - Fernanda Zecchin 

1. **a**) O comando DROP é usado para remover uma coluna.
**b**) O comando change pode ser utilizado para renomear uma coluna e alterar suas definições, como o tipo de dados de uma coluna. Esta sendo renomeado de gender para sex com 6 caracteres.
**c**) Já nesse, esta voltando de gender para gender com no 255 caracteres.
**d**) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2. **a**)UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

 **b**)UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

)UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";


**c**)UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

**d**) não apresentou erro. 

3. **a**) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
**b**)DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000

4 .**a**)'620000'
	**b**)'300000'
	**c**)2
	**d**)'3100000'
	
	5. **a**) Ele agrupa por genero e depois mostra todos os resultados.
	






