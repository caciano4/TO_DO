import { criarTarefa } from "./criarTarefa.js";

export const carregaTarefa = () => {
  const lista = document.querySelector('[data-list]');

  const tarefasGuardadas = JSON.parse(localStorage.getItem('tarefas')) || []; // []
  tarefasGuardadas.forEach((tarefa) => {  
    lista.appendChild(criarTarefa(tarefa));
  })

}