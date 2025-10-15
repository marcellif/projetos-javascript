let tarefas = ["[x] Estudar", "[x] Lavar a louça", "[ ] Ir ao mercado", "[ ] Caminhar", "[ ] Dormir"]; 

let pendentes = tarefas.filter(function(tarefa) { 

return tarefa.startsWith("[ ]"); 

}); 

console.log("Tarefas pendentes:", pendentes); 