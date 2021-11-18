import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoDeleta from './componentes/deletaTarefa.js'

const tarefa = []
const handleNovoItem = (evento) => {
    evento.preventDefault() 

    const tarefaStorage = JSON.parse(localStorage.getItem('tarefas')) || []
    
    // input
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    //Data atual
    const calendar = document.querySelector('[data-form-date]')
    const valueDate = moment(calendar.value)
    const meta = valueDate.format('DD/MM/YY HH:MM')

    //Data Meta
    const date = new Date()
    const dateValue = moment(date).format('DD/MM/YY HH:MM')

    const data = {
        dateValue,
        meta,
        valor,
    }
    console.log(tarefaStorage)
   const tarefaAtualizada = [...tarefaStorage, data]

    tarefa.push(data)
    localStorage.setItem('tarefas', JSON.stringify(tarefaAtualizada))
    criarTarefa(data)
    input.value = " "
}

const criarTarefa = (data) => {

    const lista = document.querySelector('[data-list]')
    
    const tarefa = document.createElement('li')
    const tarefaTitle = document.createElement('li')
    tarefa.classList.add('task')
    const title = `<h5 class="color-title">Criado ${data.dateValue} ${data.meta === 'Invalid date'? '':'* Conclusão '+ data.meta}</h5>`;
    const conteudo = `<p class="content"> ${data.valor}</p>`

    tarefaTitle.innerHTML = title
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefaTitle)
    lista.appendChild(tarefa)

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)