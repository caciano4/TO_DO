export const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => { 
    const botaoDeleta = evento.target
    
    const tarefaCompleta = botaoDeleta.parentElement

    botaoDeleta.parentElement.previousElementSibling.remove()
    tarefaCompleta.remove()

    return botaoDeleta

}