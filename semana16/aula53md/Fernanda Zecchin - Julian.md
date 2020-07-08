 # Fernanda Zecchin - Julian
 
  1.**a**)Isso acontece porque uma query feita com o raw devolve exatamente o que o banco MySQL devolveu.
  
   **b**)const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = ${"name"}
  `)
  console.log(result)
  return result
  
}
searchActor("");
 